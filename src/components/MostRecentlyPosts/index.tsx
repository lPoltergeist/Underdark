import { GetServerSideProps } from "next";

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

function MostRecentlyPosts({ recent }: PostsProps) {
  return (

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

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: []
  }
}