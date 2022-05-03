import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head"
import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../service/prismic";
import styles from './styles.module.scss'
import Link from "next/link";
import Card from '../../components/postcard/index'
import { stringify } from "querystring";

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

  
  return(
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
       time={post.updatedAt}
       title={post.title}
       description={post.excerpt}
  />
  </a>
       </Link>
     ))}
     </div>
  </div>
  )
}

export default Posts;

export const  getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'blog-post')
  ], {
    fetch: ['title', 'content'],
    pageSize: 10,
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

