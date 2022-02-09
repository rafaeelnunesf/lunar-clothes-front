import { ContainerAuth, CustomLink, FormContainer } from "./style";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";

import Inputs from "../../components/formComponents/Inputs";
import Button from "../../components/formComponents/Button";

export default function Login() {
  const inputs = [
    { label: "Email", type: "email", paramterName: "email" },
    { label: "Senha", type: "current-password", paramterName: "password" },
  ];

  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" />
      <h2>Entrar</h2>
      <FormContainer>
        <Inputs inputs={inputs} />
        <CustomLink to="#">
          <span>Não possui conta?</span>
          <BsArrowRight className="iconLink" />
        </CustomLink>
        <Button fieldButton={"Entrar"} />
      </FormContainer>
    </ContainerAuth>
  );
}
