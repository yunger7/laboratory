import Navbar from "./Navbar";
import { Container } from "@material-ui/core";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container className="content" maxWidth="lg">
        { children }
      </Container>
      <Footer />
    </>
  )
}

export default Layout;