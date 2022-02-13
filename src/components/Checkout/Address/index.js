import React from "react";
import styled from "styled-components";
import TitleSection from "../TitleSection";
import ChangeButton from "../ChangeButton";

export default function Address() {
  const Adress = {
    name: "Jane Doe",
    adress: "3 Newbridge Court ",
    city: "Chino Hills",
    state: "California",
    zipCode: "91709",
    country: "United States",
  };
  return (
    <AdressSection>
      <TitleSection>Shipping adress</TitleSection>
      <AdressContainer>
        <h1>{Adress.name}</h1>
        <p>{Adress.adress}</p>
        <p>{`${Adress.city}, ${Adress.state}, ${Adress.country}`}</p>
        <ChangeButton>Change</ChangeButton>
      </AdressContainer>
    </AdressSection>
  );
}
const AdressSection = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const AdressContainer = styled.div`
  width: 100%;
  height: 108px;

  background: #ffffff;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  position: relative;

  padding: 18px 28px;

  h1 {
    font-family: Metropolis;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;

    display: flex;
    align-items: center;
    margin-bottom: 7px;
  }
`;
