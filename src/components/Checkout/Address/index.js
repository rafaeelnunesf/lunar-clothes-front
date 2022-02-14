import { useContext } from "react";
import styled from "styled-components";
import TitleSection from "../TitleSection";
import ChangeButton from "../ChangeButton";
import api from "../../../services/api";
import { useEffect } from "react";
import { UserToken } from "../../../contexts/AuthContext";

export default function Address({ children }) {
  const { token } = useContext(UserToken);
  const [setAddressActive, addressData, setAddressData] = children;

  useEffect(() => {
    getAddressFromAPI();
    // eslint-disable-next-line
  }, []);
  async function getAddressFromAPI() {
    try {
      const address = await api.getAddress(token);
      delete address.data._id;
      delete address.data.userId;
      setAddressData(address.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AdressSection>
      <TitleSection>Shipping adress</TitleSection>
      <AdressContainer>
        {addressData !== undefined ? (
          <>
            <h1>Adress</h1>
            <p>{`${addressData.number} ${addressData.street}`}</p>
            <p>{`${addressData.city}, ${addressData.state}, ${addressData.country}`}</p>{" "}
            <ChangeButton onClick={() => setAddressActive(true)}>
              Change
            </ChangeButton>
          </>
        ) : (
          <AddNewAddress onClick={() => setAddressActive(true)}>
            ADD ADDRESS
          </AddNewAddress>
        )}
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
const AddNewAddress = styled.button`
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
