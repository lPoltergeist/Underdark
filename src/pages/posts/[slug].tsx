import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";

import DisqusComments from '../../components/Disqus/Disqus'
import { getPrismicClient } from "../../service/prismic";

import styles from './post.module.scss';

type PostProps = {
    post: {
        slug: string,
        title: string,
        content: string,
        author: string,
        thumbnail: string,
        alt: string,
        updatedAt: string,
    }
}

export default function Post({post}: PostProps) {

    return (
       <>
       <Head>
           <title>{post.title} | Underdark</title>
       </Head>

       <main className={styles.container}>
           <article className={styles.post}>
              
               <h1>{post.title}</h1>
             
               <time>{post.updatedAt}</time>
              <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content}} />
              
              <p>{post.author}</p>
           </article>
           <DisqusComments post={post.slug} key={post.slug}/>
       </main>
       
       </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const {slug} = params;

    const prismic = getPrismicClient()

    const response = await prismic.getByUID('blog-post', String(slug), {})
    console.log(JSON.stringify(response, null, 2))

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        author:RichText.asText(response.data.author),
        thumbnail: response.data.thumbnail.url,
        alt: response.data.thumbnail.alt,
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
    })
};


return {
    props: {
        post,
    }
}
}

