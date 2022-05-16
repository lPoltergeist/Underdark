import { GetServerSideProps} from "next";
import Head from "next/head"
import Link from "next/link";
import Script from "next/script";

import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../service/prismic";

import styles from './styles.module.scss'
import Card from '../../components/postcard/index'
import Footer from "../../components/footer";
import Widget from "../../components/Getfeedback";


type Post = {
slug: string,
title: string,
excerpt: string,
thumb: string,
alt: string,
updatedAt: string,
};

interface PostsProps {
  posts: Post[],
}

function Posts({posts}: PostsProps) { 
 const handlePageClick = (data) => {
   console.log(data.selected);
 }
  
  return(
    <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7095173623764847"/>


      <div className={styles.post}>
      <Head>
          <title>Posts | Underdark</title>
      </Head>
<div className={styles.wrapper}>
{posts.map(post => ( 
       <Link key={post.slug} href={`posts/${post.slug}`}>
         <a>
       <Card 
       img={post.thumb}
       alt={post.alt}
       time={post.updatedAt}
       title={post.title}
       description={post.excerpt}
  />
  </a>
       </Link>
     ))}
     
     </div>
  </div>
  <div className={styles.widget}><Widget/></div>
  <Footer/>
   </>
  )
}

export default Posts;

export const  getServerSideProps: GetServerSideProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'blog-post')
  ], {
    fetch: ['title', 'content'],
    pageSize: 100,
  })
//console.log(JSON.stringify(response, null, 2))

const posts = response.results.map(post => {
  return {
    slug: post.uid,
    title: RichText.asText(post.data.title),
    thumb: post.data.thumbnail.url,
    alt:post.data.thumbnail.alt,
    excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
    updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
})

//sempre que possível, formatar os dados logo após consumir a API.

  return {
    props: {posts}
  }
}

