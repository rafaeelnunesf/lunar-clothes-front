import styled from "styled-components";

export default function Values() {
  return (
    <ValuesSection>
      <TypeValue>
        <h1>Order</h1>
        <p>112$</p>
      </TypeValue>
      <TypeValue>
        <h1>Delivery</h1>
        <p>15$</p>
      </TypeValue>
      <TypeValue summary="true">
        <h1>Summary</h1>
        <p>127$</p>
      </TypeValue>
    </ValuesSection>
  );
}
const ValuesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 26px;
  margin-top: 55px;
`;
const TypeValue = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: Metropolis;
    font-size: 14px;
    line-height: 20px;
    font-weight: ${(props) => props.summary && "500"};

    display: flex;
    align-items: center;

    color: #9b9b9b;
  }
  p {
    font-family: Metropolis;
    font-size: ${(props) => (props.summary ? "18px" : "16px")};
    line-height: ${(props) => (props.summary ? "22px" : "16px")};

    text-align: right;
    font-weight: 500;

    color: #222222;
  }
`;
