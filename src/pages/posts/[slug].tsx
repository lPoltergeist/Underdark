import { useEffect, useState } from 'react';
import { GetServerSideProps } from "next";
import Head from "next/head";
import Script from "next/script";
import { RichText } from "prismic-dom";
import ShareButton from "../../components/sharebutton";

import { Eye } from 'phosphor-react';

import DisqusComments from '../../service/Disqus'
import { getPrismicClient } from "../../service/prismic";

import styles from './post.module.scss';
import ViewCounter from '../../components/viewCounter/viewCounter';

type PostProps = {
    post: {
        slug: string,
        tags: string[],
        title: string,
        content: string,
        content2: string,
        content3: string,
        author: string,
        source: string,
        revision: string,
        thumbnail: string,
        img1: string,
        img2: string,
        alt: string,
        updatedAt: string,
    }
}

export default function Post({post}: PostProps) {
    return (
       <>

<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7095173623764847"/>

       <Head>
           <title>{post.title} | Underdark</title>
       </Head>

       <main className={styles.container}>
           <article className={styles.post}>
               <div className={styles.informationsOnTop}>
              <span>tags: {post.tags} </span>
              <span><Eye color="#31312e" weight="bold"/> <ViewCounter slug={post.slug}/> </span>
              </div>
              <h1>{post.title}</h1>

               {post?.thumbnail && (
                   <img src={post.thumbnail} />
               )}
               <time>{post.updatedAt}</time>
              <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content}} />

              {post?.img1 && (
                  <img src={post.img1} />
              )}

              {post?.content2 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content2}} />
              }

              {post?.img2 && (
                  <img src={post.img2} />
              )}

              {post?.content3 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content3}} />
              }
              
              <p>Autor: {post.author} </p>
              {post?.revision && <p>Revisão: {post.revision}</p>}
              {post?.source && <p>Fonte: {post.source}</p>}
            
            <div className={styles.socialMediaLogos}>
                <h2>Compartilhe esse artigo</h2>
     <ShareButton slug={post.slug} title={post.title}/>
       </div>
           </article>
           <DisqusComments post={post.slug} key={post.slug} />
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
        content2: response.data.content2? RichText.asHtml(response.data.content2) : "",
        content3: response.data.content3? RichText.asHtml(response.data?.content3) : "",
        tags: response.tags,
        thumbnail: response.data.thumbnail.url,
        img1: response.data.img1?.url ? response.data.img1.url : "" ,
        img2:  response.data.img2?.url ? response.data.img2.url : "" ,
        alt: response.data.thumbnail.alt,
        author:RichText.asText(response.data.author),
        revision: response.data.revision,
        source: response.data?.source ? response.data.source : "",
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
    })
};


return {
    props: {
        post,
    },
}
}