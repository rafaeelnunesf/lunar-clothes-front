import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerAuth = styled.div`
  background-color: #f9f9f9;
  max-height: 100vh;
  padding: 12px 16px 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .headerIcon {
    font-size: 20px;
    align-self: flex-start;
    font-weight: 900;

    :hover {
      cursor: pointer;
    }
  }

  h2 {
    font-size: 34px;
    font-weight: 900;
    margin: 34px 0 73px 0;
    align-self: flex-start;
  }
`;

const FormContainer = styled.form`
  display: grid;
  width: 100%;
  gap: 8px;
`;

const CustomLink = styled(Link)`
  margin: 16px 0 28px 0;
  font-size: 14px;
  font-weight: 600;
  text-align: right;

  display: flex;
  align-items: center;
  justify-content: end;

  .iconLink {
    font-size: 18px;
    color: #db3022;
    margin-left: 10px;
    line-height: 20px;
  }

  :hover {
    cursor: pointer;
  }
`;

export { ContainerAuth, FormContainer, CustomLink };
