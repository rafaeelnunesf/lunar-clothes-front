import BoxProductBag from "./BoxProductBag";
import { BsChevronLeft } from "react-icons/bs";

import Button from "../../components/formComponents/Button";
import Container from "./style";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function MyBag() {
  const [productsInBag, setProductsInBag] = useState();

  useEffect(() => {
    const request = api.getBag();
    request.then((response) => {
      setProductsInBag(response.data);
    });
  }, []);
  console.log(productsInBag);

  if (!productsInBag || productsInBag.length === 0) return <h1>Loading</h1>;
  return (
    <Container>
      <BsChevronLeft className="headerIcon" />
      <h2>Carrinho</h2>
      <div className="listProducts">
        {productsInBag.map((product, i) => (
          <BoxProductBag data={product} index={i} key={i} />
        ))}
      </div>
      <div className="totalAmount">
        <p>Valor total:</p>
        <span>R$124</span>
      </div>
      <Button fieldButton={"CHECKOUT"}></Button>
      <Footer />
    </Container>
  );
}
