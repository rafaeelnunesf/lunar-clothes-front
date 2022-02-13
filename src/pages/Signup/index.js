import { useState } from "react";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";

import api from "../../services/api";
import { inputRegister } from "../../utils/inputAuthType";
import Button from "../../components/formComponents/Button";
import Inputs from "../../components/formComponents/Inputs";
import { useNavigate } from "react-router-dom";

import {
  ContainerAuth,
  CustomLink,
  FormContainer,
} from "../../style/StylesAuth";

export default function Signup() {
  const [data, setData] = useState({});
  let navigate = useNavigate();

  async function registrationNewUser(event) {
    event.preventDefault();

    try {
      //falta validação no front antes de enviar
      await api.postSignUp(data);
      console.log("deu certo!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" onClick={() => navigate(-1)} />
      <h2>Cadastre-se</h2>
      <FormContainer onSubmit={registrationNewUser}>
        <Inputs inputs={inputRegister} data={data} setData={setData} />
        <CustomLink to="/entrar">
          <span>Já tem uma conta?</span>
          <BsArrowRight className="iconLink" />
        </CustomLink>
        <Button fieldButton={"CADASTRAR"} />
      </FormContainer>
    </ContainerAuth>
  );
}
