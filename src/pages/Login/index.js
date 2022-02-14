import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";

import valideLogin from "../../validation/valideLogin";
import { initInputLogin } from "../../utils/inputAuthType";
import { UserToken } from "../../contexts/AuthContext";
import Inputs from "../../components/formComponents/Inputs";
import Button from "../../components/formComponents/Button";

import {
  ContainerAuth,
  CustomLink,
  FormContainer,
} from "../../style/StylesAuth";

export default function Login() {
  const [data, setData] = useState({});
  const [inputLogin, setInputLogin] = useState();
  const { setAndPersistToken } = useContext(UserToken);
  const navigate = useNavigate();

  useEffect(() => {
    initInputLogin(setInputLogin);
  }, []);

  async function login(event) {
    event.preventDefault();

    const error = await valideLogin(setAndPersistToken, navigate, data);
    initInputLogin(setInputLogin, error);
  }

  if (!inputLogin) return <h1>Loading...</h1>;
  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" onClick={() => navigate(-1)} />
      <h2>Sign-In</h2>
      <FormContainer onSubmit={login} noValidate>
        <Inputs inputs={inputLogin} data={data} setData={setData} />
        <CustomLink>
          <Link to="/register">
            <span>Don't you have an account?</span>
            <BsArrowRight className="iconLink" />
          </Link>
        </CustomLink>
        <Button fieldButton={"SIGN-IN"} />
      </FormContainer>
    </ContainerAuth>
  );
}
