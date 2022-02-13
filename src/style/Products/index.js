import styled from "styled-components";
const ContainerProducts = styled.div`
  width: 100%;
  max-height: 80%;
  overflow: scroll;
  margin: auto;
  box-sizing: border-box;
  padding: 0 16px;
  ::-webkit-scrollbar {
    display: none;
  }

  background: #f9f9f9;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  row-gap: 20px;
  column-gap: 17px;
`;
const Product = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  gap: 5px;
  img {
    width: 162px;
    height: 184px;
    border-radius: 8px;
  }

  p {
    font-family: Metropolis;
    font-size: 11px;

    line-height: 11px;

    color: #9b9b9b;
  }
  h1 {
    font-family: Metropolis;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;

    color: #222222;
  }
  span {
    font-family: Metropolis;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;

    color: #222222;
  }
`;
export { ContainerProducts, Product };
