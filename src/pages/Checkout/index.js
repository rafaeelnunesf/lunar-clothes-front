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
import validateSubmitOrder from "../../validation/validateSubmitOrder";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [addressActive, setAddressActive] = useState(false);
  const [paymentActive, setPaymentActive] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState();
  const [addressData, setAddressData] = useState();
  const [paymentData, setPaymentData] = useState();
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const validationData = {
      address: addressData,
      payment: paymentData,
      delivery: selectedDelivery,
    };
    const invalid = validateSubmitOrder(validationData);
    if (invalid) return;

    Swal.fire({
      icon: "success",
      title: "Completed order!",
      showConfirmButton: true,
      text: "Check your email!",
    });

    navigate("/");
  }
  return (
    <Container>
      <Header page={"Checkout"} hasSearch={false}></Header>
      <Address>
        {setAddressActive}
        {addressData}
        {setAddressData}
      </Address>
      <Payment>
        {setPaymentActive}
        {paymentData}
        {setPaymentData}
      </Payment>
      <Delivery>
        {selectedDelivery}
        {setSelectedDelivery}
      </Delivery>
      <Values>{selectedDelivery}</Values>
      <SubmitButton onClick={(e) => handleSubmit(e)}>SUBMIT ORDER</SubmitButton>
      {addressActive && (
        <AddAddress>
          {setAddressActive}
          {setAddressData}
        </AddAddress>
      )}
      {paymentActive && (
        <AddPaymentMethod>
          {setPaymentActive}
          {setPaymentData}
        </AddPaymentMethod>
      )}
    </Container>
  );
}
