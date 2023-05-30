import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/one';
import Social from '../components/two';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Navigation /> */}
      {/* <Social /> */}
    </>
    
  )
    
}
