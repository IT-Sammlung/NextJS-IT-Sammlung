import '../styles/normalize.css'
import Layout from '../components/layout'
import Header from '../components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return <Layout><Header /><Component {...pageProps} /></Layout>
}
