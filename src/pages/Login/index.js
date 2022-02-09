import { ContainerAuth, CustomLink, FormContainer } from "./style";
import { useState } from "react";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";

import { postSignIn } from "../../services/api";
import Inputs from "../../components/formComponents/Inputs";
import Button from "../../components/formComponents/Button";

export default function Login() {
  const inputs = [
    { label: "Email", type: "email", parameterName: "email" },
    { label: "Senha", type: "current-password", parameterName: "password" },
  ];
  const [data, setData] = useState({});

  async function login(event) {
    event.preventDefault();

    try {
      await postSignIn(data);
      console.log("deu certo!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" />
      <h2>Entrar</h2>
      <FormContainer onSubmit={login}>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <CustomLink to="/cadastro">
          <span>Não possui conta?</span>
          <BsArrowRight className="iconLink" />
        </CustomLink>
        <Button fieldButton={"CADASTRAR"} />
      </FormContainer>
    </ContainerAuth>
  );
}
