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
        content4: string,
        content5: string,
        content6: string,
        content7: string,
        content8: string,
        content9: string,
        content10: string,
        author: string,
        source: string,
        revision: string,
        thumbnail: string,
        img1: string,
        img2: string,
        img3: string,
        img4: string,
        img5: string,
        img6: string,
        img7: string,
        img8: string,
        img9: string,
        img10: string,
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

            {post?.img3 && (
                  <img src={post.img3} />
              )}

{post?.content4 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content4}} />
              }

            {post?.img4 && (
                  <img src={post.img4} />
              )}

{post?.content5 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content5}} />
              }

            {post?.img5 && (
                  <img src={post.img5} />
              )}

{post?.content6 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content6}} />
              }

            {post?.img6 && (
                  <img src={post.img6} />
              )}

{post?.content7 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content7}} />
              }

            {post?.img7 && (
                  <img src={post.img7} />
              )}

{post?.content8 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content8}} />
              }

            {post?.img8 && (
                  <img src={post.img8} />
              )}

{post?.content9 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content9}} />
              }

            {post?.img9 && (
                  <img src={post.img9} />
              )}

{post?.content10 && <div className={styles.postContent} 
              dangerouslySetInnerHTML={{ __html: post.content10}} />
              }

            {post?.img10 && (
                  <img src={post.img10} />
              )}
              
              <p>Autor: {post.author} </p>
              {post?.revision && <p>Revisão: {post.revision}</p>}
              {post?.source && <p>Fonte: {post.source}</p>}
            
            <div className={styles.socialMediaLogos}>
                <h2>Compartilhe esse artigo</h2>
     <ShareButton slug={post.slug} title={post.title}/>
       </div>
       <span>tags: {post.tags} </span>
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
        content4: response.data.content4? RichText.asHtml(response.data?.content4) : "",
        content5: response.data.content5? RichText.asHtml(response.data?.content5) : "",
        content6: response.data.content6? RichText.asHtml(response.data?.content6) : "",
        content7: response.data.content7? RichText.asHtml(response.data?.content7) : "",
        content8: response.data.content8? RichText.asHtml(response.data?.content8) : "",
        content9: response.data.content9? RichText.asHtml(response.data?.content9) : "",
        content10: response.data.content10? RichText.asHtml(response.data?.content10) : "",
        tags: response.tags,
        thumbnail: response.data.thumbnail.url,
        img1: response.data.img1?.url ? response.data.img1.url : "" ,
        img2:  response.data.img2?.url ? response.data.img2.url : "" ,
        img3:  response.data.img3?.url ? response.data.img3.url : "" ,
        img4:  response.data.img4?.url ? response.data.img4.url : "" ,
        img5:  response.data.img5?.url ? response.data.img5.url : "" ,
        img6:  response.data.img6?.url ? response.data.img6.url : "" ,
        img7:  response.data.img7?.url ? response.data.img7.url : "" ,
        img8:  response.data.img8?.url ? response.data.img8.url : "" ,
        img9:  response.data.img9?.url ? response.data.img9.url : "" ,
        img10:  response.data.img10?.url ? response.data.img10.url : "" ,
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