import styled from "styled-components";
import TitleSection from "../TitleSection";
import ChangeButton from "../TitleSection";
import cardImg from "../../../assets/mastercard.svg";
export default function Payment() {
  const Card = {
    name: "Rafael",
    cardNumber: "5546 8205 3693 3547",
    expiryDate: "31/12",
    cvv: "666",
  };
  return (
    <PaymentSection>
      <TitleSection>Payment</TitleSection>
      <CardInfo>
        <img src={cardImg} alt="card" />
        <p>{`**** **** **** ${Card.cardNumber.slice(-4)}`}</p>
      </CardInfo>
      <ChangeButton>Change</ChangeButton>
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
