import { TextField } from "@mui/material";
import styled from "styled-components";

const CustomInput = styled(TextField)`
  background: white;
  box-shadow: 0px 1px 8px
    ${({ helperText }) =>
      helperText.length > 0 ? "rgba(219, 48, 34, 0.5)" : "rgba(0, 0, 0, 0.05)"};
  border-radius: 4px;
  height: 64px;
  margin-left: 8px;
  font-family: "Metropolis";

  p {
    color: #db3022;
    margin: -0.1rem 0 0 1rem;
  }

  label {
    margin-left: 1rem;
    color: #9b9b9b;

    :focus {
      color: #9b9b9b !important;
    }
  }

  #mui-1-label,
  #mui-2-label,
  #mui-3-label {
    color: #9b9b9b;
    top: 5px;
  }

  div {
    ::after {
      border-bottom: none !important;
    }
    input {
      margin-left: 1rem;
      padding-top: 5px;
    }
    ::before {
      border-bottom: none !important;
    }
  }

  :hover {
    margin-left: 8px;
  }
`;

export default CustomInput;
