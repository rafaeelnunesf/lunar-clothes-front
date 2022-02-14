import styled from "styled-components";
import TitleSection from "../TitleSection";
import ChangeButton from "../ChangeButton";
import cardImg from "../../../assets/mastercard.svg";
import { useContext } from "react";
import { UserToken } from "../../../contexts/AuthContext";
import { useState, useEffect } from "react";

import api from "../../../services/api";
export default function Payment({ children }) {
  const { token } = useContext(UserToken);
  const setPaymentActive = children;
  const [paymentData, setPaymentData] = useState();

  useEffect(() => getAddressFromAPI(), []);
  async function getAddressFromAPI() {
    try {
      const payment = await api.getPaymentMethod(token);
      delete payment?.data._id;
      delete payment?.data.userId;
      setPaymentData(payment?.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <PaymentSection>
      <TitleSection>Payment</TitleSection>
      <CardInfo>
        {paymentData !== undefined ? (
          <>
            <img src={cardImg} alt="card" />
            <p>{`**** **** **** ${paymentData.cardNumber.slice(-4)}`}</p>
            <ChangeButton onClick={() => setPaymentActive(true)}>
              Change
            </ChangeButton>
          </>
        ) : (
          <AddNewPayment onClick={() => setPaymentActive(true)}>
            ADD PAYMENT
          </AddNewPayment>
        )}
      </CardInfo>
    </PaymentSection>
  );
}

const PaymentSection = styled.div`
  position: relative;
  width: 100%;
  height: 108px;
  margin-top: 57px;
  padding-top: 18px;

  img {
    width: 64px;
    height: 38px;

    background: #ffffff;
    box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
`;
const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;
const AddNewPayment = styled.button`
  all: unset;
  height: 48px;
  width: 200px;

  background: #db3022;
  box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
  border-radius: 25px;
  font-family: Metropolis;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto auto;

  color: #ffffff;
`;
