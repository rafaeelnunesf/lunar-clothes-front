import styled from "styled-components";

const Container = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  max-height: 100vh;
  padding: 12px 16px 105px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .headerIcon {
    font-size: 20px;
    align-self: flex-start;
    font-weight: 900;
  }

  h2 {
    font-size: 34px;
    font-weight: 900;
    margin: 34px 0 24px 0;
    align-self: flex-start;
  }

  .listProducts {
    width: 100%;
    min-height: calc(100vh - 340px);
    overflow: scroll;
  }

  .totalAmount {
    margin: 28px 5px 26px 5px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    p {
      object-position: left;
      font-weight: 600;
      font-size: 14px;
      color: #9b9b9b;
    }

    span {
      object-position: right;
      font-weight: 900;
      font-size: 18px;
      color: black;
    }
  }
`;

export default Container;
