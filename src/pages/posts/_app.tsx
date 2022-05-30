import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Header } from '../components/header'
import Analytics from '../service/googleAnalytics'

import '../styles/global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Analytics/>
    </>
  )
}

export default App
