import { useContext, useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import api from "../../services/api";
import { UserToken } from "../../contexts/AuthContext";

import BoxProductBag from "./BoxProductBag";
import Button from "../../components/formComponents/Button";
import Container from "./style";

export default function MyBag() {
  const [productsInBag, setProductsInBag] = useState();
  const [total, setTotal] = useState();
  const { token } = useContext(UserToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      initProductsInBag();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faça login!",
      });
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  async function initProductsInBag() {
    try {
      const response = await api.getBag(token);
      setProductsInBag(response.data);

      let soma = 0;
      response.data.map(
        (product) => (soma += product.price * product.quantity)
      );
      setTotal(soma);
    } catch (err) {
      console.log(err);
    }
  }

  if (!productsInBag) return <h1>Loading</h1>;
  return (
    <Container>
      <BsChevronLeft className="headerIcon" />
      <h2>My bag</h2>
      <form onSubmit={() => navigate("/checkout")}>
        <div className="listProducts">
          {productsInBag.length === 0 ? (
            <h3>Your cart is empty!</h3>
          ) : (
            productsInBag.map((product) => (
              <BoxProductBag
                data={product}
                key={product._id}
                reload={initProductsInBag}
              />
            ))
          )}
        </div>
        <div className="totalAmount">
          <p>Total value:</p>
          <span>R$ {total}</span>
        </div>
        <Button fieldButton={"CHECKOUT"}></Button>
      </form>
    </Container>
  );
}
