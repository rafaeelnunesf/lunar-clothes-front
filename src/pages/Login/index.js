import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";

import { inputLogin } from "../../utils/inputAuthType";
import { UserToken } from "../../contexts/AuthContext";
import { postSignIn } from "../../services/api";
import Inputs from "../../components/formComponents/Inputs";
import Button from "../../components/formComponents/Button";

import {
  ContainerAuth,
  CustomLink,
  FormContainer,
} from "../../style/StylesAuth";

export default function Login() {
  const [data, setData] = useState({});
  const { setAndPersistToken } = useContext(UserToken);
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    try {
      //falta validacao no front antes de enviar
      const result = await postSignIn(data);
      setAndPersistToken(result.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" />
      <h2>Entrar</h2>
      <FormContainer onSubmit={login}>
        <Inputs inputs={inputLogin} data={data} setData={setData} />
        <CustomLink to="/cadastro">
          <span>Não possui conta?</span>
          <BsArrowRight className="iconLink" />
        </CustomLink>
        <Button fieldButton={"ENTRAR"} />
      </FormContainer>
    </ContainerAuth>
  );
}
