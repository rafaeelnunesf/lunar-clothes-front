import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "./Products";
import Container from "../../components/PageComponents/Container";
import AddToCart from "./SelectSize";
import { useState } from "react";

export default function Catalog() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Container>
      <Header></Header>
      <Products
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      ></Products>
      <Footer></Footer>
      <AddToCart isSelected={isSelected} setIsSelected={setIsSelected} />
    </Container>
  );
}
