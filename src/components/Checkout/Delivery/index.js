import styled from "styled-components";
import dhl from "../../../assets/dhl.svg";
import fedex from "../../../assets/fedex.svg";
import usps from "../../../assets/usps.svg";
import TitleSection from "../TitleSection";

export default function Delivery() {
  return (
    <DeliverySection>
      <TitleSection>Delivery method</TitleSection>
      <DeliveryChoices>
        <DeliveryMethod>
          <img src={fedex} alt="deliveryMethod" />
          <p>2-3 days</p>
        </DeliveryMethod>
        <DeliveryMethod>
          <img src={usps} alt="deliveryMethod" />
          <p>2-3 days</p>
        </DeliveryMethod>
        <DeliveryMethod>
          <img src={dhl} alt="deliveryMethod" />
          <p>2-3 days</p>
        </DeliveryMethod>
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

  background: #ffffff;
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

    color: #9b9b9b;
  }
`;
const DeliveryChoices = styled.div`
  margin-top: 21px;
  display: flex;
  justify-content: center;
  gap: 22px;
`;
