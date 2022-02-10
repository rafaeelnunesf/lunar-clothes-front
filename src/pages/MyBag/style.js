import styled from "styled-components";

const Container = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 12px 16px 0 16px;

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
`;

export default Container;
