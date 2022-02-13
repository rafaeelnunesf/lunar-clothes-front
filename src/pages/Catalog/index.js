import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "./Products";
import Container from "../../components/PageComponents/Container";

export default function Catalog() {
  return (
    <Container>
      <Header page={"Catálogo"} hasSearch={true}></Header>
      <Products></Products>
      <Footer></Footer>
    </Container>
  );
}
