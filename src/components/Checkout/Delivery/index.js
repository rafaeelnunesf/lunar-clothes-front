import { useState } from "react";
import styled from "styled-components";
import dhl from "../../../assets/dhl.svg";
import fedex from "../../../assets/fedex.svg";
import usps from "../../../assets/usps.svg";
import TitleSection from "../TitleSection";

export default function Delivery({ children }) {
  const typeDelivery = [
    { name: "fedex", image: fedex, price: 15, time: "7-10 days" },
    { name: "usps", image: usps, price: 25, time: "2-3 days" },
    { name: "dhl", image: dhl, price: 10, time: "10-12 days" },
  ];
  const [selectedDelivery, setSelectedDelivery] = children;

  function handleClick(item) {
    if (selectedDelivery?.name === item.name) {
      setSelectedDelivery();
    } else {
      setSelectedDelivery({ ...item });
    }
  }
  return (
    <DeliverySection>
      <TitleSection>Delivery method</TitleSection>
      <DeliveryChoices>
        {typeDelivery.map((item) => (
          <DeliveryMethod
            hasColor={selectedDelivery?.name === item.name}
            onClick={() => handleClick(item)}
          >
            <img src={item.image} alt="deliveryMethod" />
            <p>{item.time}</p>
            <p>{`price: ${item.price} $`}</p>
          </DeliveryMethod>
        ))}
      </DeliveryChoices>
    </DeliverySection>
  );
}

const DeliverySection = styled.div`
  position: relative;
  width: 100%;
  height: 108px;
  margin-top: 57px;
  padding-top: 18px;
`;
const DeliveryMethod = styled.div`
  width: 100px;
  height: 72px;

  background: ${(props) => (props.hasColor ? "red" : "#fff")};
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  p {
    font-family: Metropolis;
    font-size: 11px;
    line-height: 11px;
    display: flex;
    align-items: center;

    color: ${(props) => (props.hasColor ? "#fff" : "#9b9b9b")};
  }
`;
const DeliveryChoices = styled.div`
  margin-top: 21px;
  display: flex;
  justify-content: center;
  gap: 22px;
`;
