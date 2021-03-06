import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import Layout from '../components/Layout';
import '../styles/globals.css'
import 'fontsource-roboto';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
