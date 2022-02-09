import { ContainerAuth, CustomLink, FormContainer } from "./style";
import { useState } from "react";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";

import Button from "../../components/formComponents/Button";
import Inputs from "../../components/formComponents/Inputs";

export default function Signup() {
  const inputs = [
    { label: "Nome", type: "text", paramterName: "name" },
    { label: "Email", type: "email", paramterName: "email" },
    { label: "Senha", type: "current-password", paramterName: "password" },
  ];
  const [data, setData] = useState({});

  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" />
      <h2>Cadastre-se</h2>
      <FormContainer>
        <Inputs inputs={inputs} data={data} setData={setData} />
        <CustomLink to="#">
          <span>Já tem uma conta?</span>
          <BsArrowRight className="iconLink" />
        </CustomLink>
        <Button fieldButton={"Cadastrar"} />
      </FormContainer>
    </ContainerAuth>
  );
}
