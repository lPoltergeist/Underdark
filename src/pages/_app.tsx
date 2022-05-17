import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../../lib/gtag'
import { Header } from '../components/header'
import Analytics from '../service/googleanalytics'

import '../styles/global.scss';

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Analytics/>
    </>
  )
}

export default App
