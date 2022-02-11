import { BsChevronLeft } from "react-icons/bs";
import BoxProductBag from "../../components/bagComponents/BoxProductBag";

import Button from "../../components/formComponents/Button";
import Container from "./style";

export default function MyBag() {
  const productsInBag = [
    {
      image:
        "https://a-static.mlcdn.com.br/1500x1500/blusa-cropped-feminino-modelo-reto-regata-alca-propria/modabarata/f64542ee55aa11eb99ce4201ac1850d5/55a9a84f262b7fd40edcad959e9dc8ea.jpg",
      name: "Longsleeve Violeta",
      price: "R$ 20,00",
      color: "white",
      size: "L",
    },
    {
      image:
        "https://a-static.mlcdn.com.br/1500x1500/blusa-cropped-feminino-modelo-reto-regata-alca-propria/modabarata/f64542ee55aa11eb99ce4201ac1850d5/55a9a84f262b7fd40edcad959e9dc8ea.jpg",
      name: "Longsleeve Violeta",
      price: "R$ 20,00",
      color: "white",
      size: "L",
    },
  ];

  return (
    <Container>
      <BsChevronLeft className="headerIcon" />
      <h2>Carrinho</h2>
      {productsInBag.map((product, i) => (
        <BoxProductBag data={product} index={i} />
      ))}
      <div className="totalAmount">
        <p>Valor total:</p>
        <span>R$124</span>
      </div>
      <Button fieldButton={"CHECKOUT"}></Button>
    </Container>
  );
}
