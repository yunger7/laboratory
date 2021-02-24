import Layout from '../components/Layout';
import '../styles/globals.css'
import 'fontsource-roboto';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
