import styled from "styled-components";

const CustomButton = styled.button`
  all: unset;
  width: 100%;
  height: 48px;

  background: #db3022;
  box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
  border-radius: 25px;
  font-size: 14px;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

export default CustomButton;
