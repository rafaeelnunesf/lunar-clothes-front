import { ContainerAuth, CustomLink, FormContainer } from "./style";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";
import Inputs from "../../components/formComponents/Inputs";

export default function Login() {
  const inputs = [
    { label: "Nome", type: "text", paramterName: "name" },
    { label: "Email", type: "email", paramterName: "email" },
    { label: "Senha", type: "current-password", paramterName: "password" },
  ];
  console.log(typeof inputs);

  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" />
      <h2>Cadastre-se</h2>
      <FormContainer>
        <Inputs inputs={inputs} />
        <CustomLink to="#">
          <span>Já tem uma conta?</span>
          <BsArrowRight className="iconLink" />
        </CustomLink>
        <button>CADASTRAR</button>
      </FormContainer>
    </ContainerAuth>
  );
}
