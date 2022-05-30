import { GetServerSideProps } from "next";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../service/prismic";
import styles from './styles.module.scss'
import Link from "next/link";

type Post = {
  slug: string,
  title: string,
  thumb: string,
  alt: string,
  updatedAt: string,
  };
  
  interface PostsProps {
    recent: Post[],
  }

function MostRecentlyPosts({recent}: PostsProps) {
  return(

      <main className={styles.container}>
        <div className={styles.posts}>    
        {recent.map(post => (
          <Link key={post.slug} href={`posts/${post.slug}`}>
 <aside className={styles.box}>
<img src={post.thumb} />
<div>
  <h4>{post.title}</h4>
  <time>{post.updatedAt}</time>
</div>

 </aside>
</Link>
        ))}
        </div>
      </main>
    
  )
}

export default MostRecentlyPosts;

export const  getServerSideProps: GetServerSideProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'blog-post')
  ], {
   orderings : '[document.first_publication_date desc]',
    pageSize: 1,
  })
//console.log(JSON.stringify(response, null, 2))

const recent = response.results.map(post => {
  return {
    slug: post.uid,
    title: RichText.asText(post.data.title),
    thumb: post.data.thumbnail.url,
    alt:post.data.thumbnail.alt,
    updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
})
console.log(recent);

//sempre que possível, formatar os dados logo após consumir a API.

  return {
    props: {recent}
  }
}