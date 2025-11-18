import { GetServerSideProps } from "next";
import Head from "next/head"
import Link from "next/link";
import Script from "next/script";

import styles from './styles.module.scss'
import Card from '../../components/postcard/index'
import Footer from "../../components/footer";
import { getPosts } from "../../libs/getPosts";

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

function Posts({ posts }: PostsProps) {
  const handlePageClick = (data) => {
    console.log(data.selected);
  }



  return (
    <>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7095173623764847" />

      <div className={styles.post}>
        <Head>
          <title>Posts | Underdark</title>
        </Head>
        <div className={styles.wrapper}>
          /* {posts.map(post => (
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
        ))} */

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Posts;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  //sempre que possível, formatar os dados logo após consumir a API.

  return {
    props: { posts }

  }
}

