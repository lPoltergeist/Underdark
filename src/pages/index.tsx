import { GetStaticProps } from 'next';

import Head from 'next/head';

import styles from './home.module.scss';

// client-side
// server-side
// static site generation

// blog

// conteúdo (SSG)
// comentários ( client-side )

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({product}) {


  return (
    <>
    <Head>
      <title>A Biblia de Underdark</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
<span>Bem vindo, viajante solitário.</span>
<h1> Conteúdo sobre o mundo do <span>RPG</span> toda semana.</h1>
      </section>
      <img className={styles.mindflayer} src="/mindflayer.png"/>
    </main>
      </>
  )
}

//export const getStaticProps: GetStaticProps = async() => {}