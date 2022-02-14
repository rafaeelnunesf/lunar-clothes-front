import styled from "styled-components";
import { SubmitButton } from "../../../components/Checkout";
import { Box } from "../../Catalog/BoxSize/style";
import { useContext, useState } from "react";
import validateForm from "../../../utils/validateForm";
import api from "../../../services/api";
import { UserToken } from "../../../contexts/AuthContext";
import Swal from "sweetalert2";
export default function AddAddress({ children }) {
  const setAddressActive = children;
  // const { token } = useContext(UserToken);
  const token = "fb44401b-3403-40d9-968b-737b91eaec3a";

  const [formData, setFormdata] = useState({
    street: "",
    number: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  function handleChange(e) {
    setFormdata({ ...formData, [e.name]: e.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const invalid = validateForm(formData);
    if (invalid) return;
    try {
      await api.postAddress(formData, token);
      Swal.fire({
        icon: "success",
        title: "Address added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setAddressActive(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Box>
      <PopUp>
        <p>Adicionar novo endereço</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            required
            name="street"
            value={formData.street}
            onChange={(e) => handleChange(e.target)}
            type="text"
            placeholder="Rua"
          />
          <Input
            required
            name="number"
            value={formData.number}
            onChange={(e) => handleChange(e.target)}
            type="number"
            placeholder="Nº"
          />
          <Input
            required
            name="city"
            value={formData.city}
            onChange={(e) => handleChange(e.target)}
            type="text"
            placeholder="Cidade"
          />
          <Input
            required
            name="state"
            value={formData.state}
            onChange={(e) => handleChange(e.target)}
            type="text"
            placeholder="Estado"
          />
          <Input
            required
            name="country"
            value={formData.country}
            onChange={(e) => handleChange(e.target)}
            type="text"
            placeholder="País"
          />
          <Input
            required
            name="zipcode"
            value={formData.zipcode}
            onChange={(e) => handleChange(e.target)}
            placeholder="CEP (XXXXX-XXX)"
          />
          <SubmitButton>ADD ADDRESS</SubmitButton>
        </form>
      </PopUp>
    </Box>
  );
}
const PopUp = styled.div`
  width: 100%;
  height: 672px;
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
