import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
`;

const PopUp = styled.div`
  width: 100%;
  height: 286px;
  background-color: #f9f9f9;
  box-shadow: 0px -4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 34px 34px 0px 0px;
  padding: 0 16px;

  position: fixed;
  bottom: 0;
  z-index: 3;

  p {
    color: #222222;
    margin: 36px 0 22px 0;
    font-size: 18px;
    font-weight: 600;

    display: flex;
    justify-content: center;
  }

  .listSizes {
    width: 100%;
    height: calc(286px - 168px);
    margin-bottom: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
  }
`;

const ButtonSize = styled.button`
  all: unset;
  width: 100px;
  height: 40px;

  background: ${({ select }) => (select ? "#db3022" : "#ffffff")};
  color: ${({ select }) => (select ? "#FFF" : "#000")};
  border: 0.4px solid ${({ select }) => (select ? "#db3022" : "#9b9b9b")};

  border-radius: 8px;
  font-size: 14px;

  align-self: center;
  text-align: center;
`;

export { Box, PopUp, ButtonSize };
