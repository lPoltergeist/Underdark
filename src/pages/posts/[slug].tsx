import { GetServerSideProps } from "next";
import Head from "next/head";
import Script from "next/script";
import MostRecentlyPosts from "../../components/MostRecentlyPosts";
import ShareButton from "../../components/sharebutton";

import DisqusComments from '../../service/Disqus'

import styles from './post.module.scss';
import { getArticle } from "../../libs/getArticle";

type PostProps = {
    post: {
        slug: string,
        tags: string[],
        title: string,
        content: string,
        content2: string,
        content3: string,
        author: string,
        thumbnail: string,
        img1: string,
        img2: string,
        alt: string,
        updatedAt: string,
    }
}

export default function Post({ post, slug }: any) {

    return (
        <>

            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7095173623764847" />

            {/* <Head>
                <title>{post.title} | Underdark</title>
            </Head> */}

            <main className={styles.container}>
                <article className={styles.post}>
                    <div className={styles.article}
                        dangerouslySetInnerHTML={{ __html: post }}
                    />

                    <div className={styles.socialMediaLogos}>
                        <h2>Compartilhe esse artigo</h2>
                        <ShareButton slug={slug} title={post.title} />
                    </div>
                </article>
                <DisqusComments post={slug} key={slug} />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const slug = params?.slug as string;
    const post = await getArticle(slug);
    return {
        props: {
            post,
            slug
        }
    }
}