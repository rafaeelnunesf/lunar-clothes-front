import styled from "styled-components";
const Container = styled.div`
  transition: height 300ms ease-in;
  width: 100%;
  height: 0;

  background: #f9f9f9;
  box-shadow: 0px -4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 34px 34px 0px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 -16px;
  box-sizing: border-box;

  padding: 14px 16px 40px 16px;

  z-index: ${(props) => (props.className ? "2" : "0")};
  position: fixed;
  bottom: 0;
  right: 16px;
  left: 16px;

  &.active {
    transition: height 300ms ease-in;
    height: 368px;
  }
`;
const Rectangle = styled.div`
  width: 60px;
  height: 6px;
  background: #9b9b9b;
  border-radius: 3px;
  margin-bottom: 16px;
`;
const H1selectSize = styled.h1`
  font-family: Metropolis;
  font-size: 18px;
  line-height: 22px;

  text-align: center;

  color: #222222;
  margin-bottom: 25px;
`;

const SizeButtonsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 20px;
`;
const Buttons = styled.button`
  all: unset;
  text-align: center;
  width: 100px;
  height: 40px;
  border: 0.4px solid #9b9b9b;

  background: ${({ selected }) => (selected ? "#db3022" : "#ffffff")};
  color: ${({ selected }) => (selected ? "#FFF" : "#000")};
  border-color: ${({ selected }) => (selected ? "#db3022" : "#9b9b9b")};
  box-sizing: border-box;
  border-radius: 8px;
`;
const AddButton = styled.button`
  all: unset;
  text-align: center;

  font-family: Metropolis;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  width: 343px;
  min-height: 48px;
  background: #db3022;
  box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
  border-radius: 25px;

  margin-top: 100px;
  margin-bottom: 44px;
`;

export {
  Container,
  Rectangle,
  H1selectSize,
  SizeButtonsDiv,
  Buttons,
  AddButton,
};
