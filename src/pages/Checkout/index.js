import Header from "../../components/Header";
import Container from "../../components/PageComponents/Container";

import {
  Address,
  Payment,
  Delivery,
  Values,
  SubmitButton,
} from "../../components/Checkout/index.js";
import AddAddress from "./AddAddress";
import AddPaymentMethod from "./AddPaymentMethod";
import { useState } from "react";

export default function Checkout() {
  const [addressActive, setAddressActive] = useState(false);
  const [paymentActive, setPaymentActive] = useState(false);

  return (
    <Container>
      <Header page={"Checkout"} hasSearch={false}></Header>
      <Address>{setAddressActive}</Address>
      <Payment>{setPaymentActive}</Payment>
      <Delivery />
      <Values />
      <SubmitButton>SUBMIT ORDER</SubmitButton>
      {addressActive && <AddAddress>{setAddressActive}</AddAddress>}
      {paymentActive && <AddPaymentMethod>{setPaymentActive}</AddPaymentMethod>}
    </Container>
  );
}
