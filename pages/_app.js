import '../styles/global.css'
import Layout from '../components/layout'
import Header from '../components/header/header'

export default function App({ Component, pageProps }) {
  return <Layout><Header /><Component {...pageProps} /></Layout>
}
