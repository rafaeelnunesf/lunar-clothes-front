import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { UserToken } from "../../../contexts/AuthContext";
import api from "../../../services/api";

export default function Values({ children }) {
  const selectedDelivery = children;
  const { token } = useContext(UserToken);
  const [total, setTotal] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    if (token) {
      initProductsInBag();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faça login!",
      });
      navigate("/");
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  async function initProductsInBag() {
    try {
      const response = await api.getBag(token);

      let soma = 0;
      response.data.map((product) => (soma += product.price));
      setTotal(soma);
    } catch (err) {
      console.log(err);
    }
  }
  let summary = total + selectedDelivery?.price;
  return (
    <ValuesSection>
      <TypeValue>
        <h1>Order</h1>
        <p>{`${total}$`}</p>
      </TypeValue>
      <TypeValue>
        <h1>Delivery</h1>
        <p>{`${
          selectedDelivery
            ? `${selectedDelivery.price}$`
            : "Select a delivery method!"
        }`}</p>
      </TypeValue>
      <TypeValue summary="true">
        <h1>Summary</h1>
        <p>{`${
          selectedDelivery ? `${summary}$` : "Select a delivery method!"
        }`}</p>
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
