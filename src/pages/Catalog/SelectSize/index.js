import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { productsContext } from "../../../contexts/ProductContext";
import {
  Container,
  Rectangle,
  H1selectSize,
  SizeButtonsDiv,
  Buttons,
  AddButton,
} from "../../../components/SelectSizeAndAddToCart/index.js";

export default function AddToCart({ isSelected, setIsSelected }) {
  const [selectedSize, setSelectedSize] = useState();
  const { selectedProduct, setCartProducts, cartProducts } =
    useContext(productsContext);

  function handleSubmit() {
    const product = { ...selectedProduct, size: selectedSize };
    if (selectedSize) {
      setCartProducts([...cartProducts, product]);
      setIsSelected(false);
      Swal.fire({
        icon: "success",
        title: "product added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Choose a size!",
    });
  }
  function handleButtonClick(e, size) {
    if (selectedSize && selectedSize === size) {
      setSelectedSize("");
      return;
    }
    setSelectedSize(size);
  }
  if (!selectedProduct) return <h1>Loading</h1>;
  return (
    <Container className={isSelected && "active"}>
      <Rectangle></Rectangle>
      <H1selectSize>Select Size</H1selectSize>
      <SizeButtonsDiv>
        {selectedProduct.size.map((size, i) => (
          <Buttons
            key={i}
            selected={selectedSize === size}
            onClick={(e) => handleButtonClick(e.target, size, i)}
          >
            {size}
          </Buttons>
        ))}
      </SizeButtonsDiv>
      <AddButton onClick={() => handleSubmit()}>ADD TO CART</AddButton>
    </Container>
  );
}
