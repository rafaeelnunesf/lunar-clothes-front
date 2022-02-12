import styled from "styled-components";
import back from "../../assets/back.svg";
import search from "../../assets/search.svg";
export default function Header() {
  return (
    <ContainerHeader>
      <div>
        <img src={back} alt="" />
        <h1>Lunar Clothes</h1>
        <img src={search} alt="" />
      </div>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  max-width: 100%;

  div {
    min-height: 70px;
    max-height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 25px;
  }
  & > div > h1 {
    font-family: Metropolis;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;

    text-align: center;
    color: #222222;
  }
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  margin-bottom: 16px;
`;