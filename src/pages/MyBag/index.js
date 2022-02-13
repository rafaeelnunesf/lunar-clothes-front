import BoxProductBag from "./BoxProductBag";
import { BsChevronLeft } from "react-icons/bs";

import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { UserToken } from "../../contexts/AuthContext";

import Button from "../../components/formComponents/Button";
import Footer from "../../components/Footer";
import Container from "./style";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function MyBag() {
  const [productsInBag, setProductsInBag] = useState();
  const { token } = useContext(UserToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const request = api.getBag(token);
      request.then((response) => {
        setProductsInBag(response.data);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faça login!",
      });
      navigate("/entrar");
    }
    // eslint-disable-next-line
  }, []);

  if (!productsInBag) return <h1>Loading</h1>;
  return (
    <Container>
      <BsChevronLeft className="headerIcon" />
      <h2>Carrinho</h2>
      <div className="listProducts">
        {productsInBag.map((product, i) => (
          <BoxProductBag data={product} index={i} key={i} />
        ))}
      </div>
      <div className="totalAmount">
        <p>Valor total:</p>
        <span>R$124</span>
      </div>
      <Button fieldButton={"CHECKOUT"}></Button>
      <Footer />
    </Container>
  );
}
