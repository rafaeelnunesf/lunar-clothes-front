import { useEffect, useState } from "react";
import { BsChevronLeft, BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import valideRegistration from "../../validation/valideRegistration";
import { initInputRegister } from "../../utils/inputAuthType";
import Button from "../../components/formComponents/Button";
import Inputs from "../../components/formComponents/Inputs";

import {
  ContainerAuth,
  CustomLink,
  FormContainer,
} from "../../style/StylesAuth";

export default function Signup() {
  const [data, setData] = useState({});
  const [inputRegister, setinputRegister] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    initInputRegister(setinputRegister);
  }, []);

  async function registrationNewUser(event) {
    event.preventDefault();

    const error = await valideRegistration(data, navigate);
    initInputRegister(setinputRegister, error);
  }

  if (!inputRegister) return <h1>Loading...</h1>;
  return (
    <ContainerAuth>
      <BsChevronLeft className="headerIcon" onClick={() => navigate(-1)} />
      <h2>Register</h2>
      <FormContainer onSubmit={registrationNewUser} noValidate>
        <Inputs inputs={inputRegister} data={data} setData={setData} />
        <CustomLink>
          <Link to="/login">
            <span>Already have an account?</span>
            <BsArrowRight className="iconLink" />
          </Link>
        </CustomLink>
        <Button fieldButton={"REGISTER"} />
      </FormContainer>
    </ContainerAuth>
  );
}
