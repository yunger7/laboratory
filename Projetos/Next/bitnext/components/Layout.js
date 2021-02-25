import Navbar from "./Navbar";
import { Container } from "@material-ui/core";
import Footer from "./footer";

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