import FontStyle from "../src/assest/Font/FontStyle";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import styled from "styled-components/macro";

function App() {
  return (
      <Container>
        <FontStyle/>
        <Navbar/>
        <Product/>
        <Footer/>
      </Container>
    );
}

export default App;

const Container = styled.div`
  @media (max-width:800px) {
    width: fit-content;
  }
  @media (max-width:1024px) {
    width: 100%;
  }
  
`
