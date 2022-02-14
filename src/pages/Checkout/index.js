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
import { useContext, useState } from "react";
import validateSubmitOrder from "../../validation/validateSubmitOrder";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { UserToken } from "../../contexts/AuthContext";

export default function Checkout() {
  const [addressActive, setAddressActive] = useState(false);
  const [paymentActive, setPaymentActive] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState();
  const [addressData, setAddressData] = useState();
  const [paymentData, setPaymentData] = useState();
  const { token } = useContext(UserToken);
  let navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const validationData = {
      address: addressData,
      payment: paymentData,
      delivery: selectedDelivery,
    };
    const invalid = validateSubmitOrder(validationData);
    if (invalid) return;

    try {
      await api.deleteMyBagProducts(token);
      Swal.fire({
        icon: "success",
        title: "Completed order!",
        showConfirmButton: true,
        text: "Check your email!",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
