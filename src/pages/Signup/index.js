import { ContainerAuth, CustomLink, FormContainer } from "./style";
import { useState } from "react";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";

import { postSignUp } from "../../services/api";
import Button from "../../components/formComponents/Button";
import Inputs from "../../components/formComponents/Inputs";

export default function Signup() {
  const inputs = [
    { label: "Nome", type: "text", parameterName: "name" },
    { label: "Email", type: "email", parameterName: "email" },
    { label: "Senha", type: "current-password", parameterName: "password" },
  ];
  const [data, setData] = useState({});

  async function registrationNewUser(event) {
    event.preventDefault();

    try {
      await postSignUp(data);
      console.log("deu certo!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" />
      <h2>Cadastre-se</h2>
      <FormContainer onSubmit={registrationNewUser}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <CustomLink to="/login">
          <span>Já tem uma conta?</span>
          <BsArrowRight className="iconLink" />
        </CustomLink>
        <Button fieldButton={"CADASTRAR"} />
      </FormContainer>
    </ContainerAuth>
  );
}
