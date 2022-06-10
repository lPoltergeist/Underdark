import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { Header } from '../components/header'
import Analytics from '../service/googleAnalytics'

import '../styles/global.scss';

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Header/>
      <NextNProgress
      color='var(--red-700)'
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow
      />
      <Toaster position="bottom-right"/>
      <Component {...pageProps} />
      <Analytics/>
    </>
  )
}

export default App
