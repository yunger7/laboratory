import Navbar from "./Navbar";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container className="content" maxWidth="lg">
        { children }
      </Container>
    </>
  )
}

export default Layout;