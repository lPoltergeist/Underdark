import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

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
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  return (
    <>
    <Head>
      <title>A Biblia de Underdark</title>

      <meta
          name="description"
          content="Underdark, um site feito por fãs de RPG para fãs de RPG."
        />
    </Head>

    <main className={styles.contentContainer}>
      <section  data-aos="fade-right" className={styles.hero}>
<span>Bem vindo, viajante solitário.</span>
<h1> Conteúdo sobre o mundo do <span>RPG</span> toda semana.</h1>
      </section>
      <img data-aos="fade-left" className={styles.mindflayer} src="/mindflayer.png"/>
    </main>
      </>
  )
}

//export const getStaticProps: GetStaticProps = async() => {}