import Header from "../../components/Header";
import Container from "../../components/PageComponents/Container";

import {
  Address,
  Payment,
  Delivery,
  Values,
  SubmitButton,
} from "../../components/Checkout/index.js";

export default function Checkout() {
  return (
    <Container>
      <Header page={"Checkout"} hasSearch={false}></Header>
      <Address />
      <Payment />
      <Delivery />
      <Values />
      <SubmitButton>SUBMIT ORDER</SubmitButton>
    </Container>
  );
}
