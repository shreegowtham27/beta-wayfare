import Head from 'next/head'
import '../styles/global.scss' // added

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
