import styled from "styled-components";
import { Box } from "../../Catalog/BoxSize/style";
import { SubmitButton } from "../../../components/Checkout";
import { useContext, useState } from "react";
import validatePaymentMethod from "../../../validation/validatePaymentMethod";
import api from "../../../services/api";
import { UserToken } from "../../../contexts/AuthContext";
import Swal from "sweetalert2";
export default function AddPaymentMethod({ children }) {
  const setPaymentActive = children;
  const { token } = useContext(UserToken);
  const [formData, setFormdata] = useState({
    name: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });
  function handleChange(e) {
    setFormdata({ ...formData, [e.name]: e.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const invalid = validatePaymentMethod(formData);
    if (invalid) return;
    try {
      await api.postPaymentMethod(formData, token);
      Swal.fire({
        icon: "success",
        title: "Payment Method added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setPaymentActive(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Box>
      <PopUp>
        <p>Adicionar novo método de pagamento</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            required
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e.target)}
            type="text"
            placeholder="Nome no cartão"
          />
          <Input
            required
            name="cardNumber"
            value={formData.cardNumber}
            onChange={(e) => handleChange(e.target)}
            type="text"
            placeholder="Número do cartão"
          />
          <Input
            required
            name="expireDate"
            value={formData.expireDate}
            onChange={(e) => handleChange(e.target)}
            type="text"
            placeholder="Data de vencimento"
          />
          <Input
            required
            name="cvv"
            value={formData.cvv}
            onChange={(e) => handleChange(e.target)}
            type="number"
            placeholder="cvv"
          />
          <SubmitButton>ADICIONAR</SubmitButton>
        </form>
      </PopUp>
    </Box>
  );
}
const PopUp = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f9f9f9;
  box-shadow: 0px -4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 34px 34px 0px 0px;
  padding: 0 16px;

  position: fixed;
  bottom: 0;
  z-index: 3;

  p {
    color: #222222;
    margin: 36px 0 22px 0;
    font-size: 18px;
    font-weight: 600;

    display: flex;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const Input = styled.input`
  height: 64px;
  width: 100%;
  padding: 0 20px;

  outline: 0;
  border: 0;
  border-radius: 4px;

  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  font-family: Metropolis;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
`;
