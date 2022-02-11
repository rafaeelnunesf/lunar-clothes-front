import {
  ContainerProducts,
  Product,
} from "../../../components/Products/index.js";
import { useContext, useEffect, useState } from "react";
import { MyBag } from "../../../contexts/MyBagContext.js";
import api from "../../../services/api.js";
import BoxSize from "../BoxSize/index.js";
export default function Products() {
  const [products, setProducts] = useState();
  const { myBag, setMyBag } = useContext(MyBag);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const dataEntries = await api.getProducts();
      console.log(dataEntries);
      setProducts(dataEntries.data);
    } catch (error) {
      console.log(error);
    }
  }

  function clickInProduct(id) {
    const answer = window.confirm("Adicionar ao carrinho?");
    if (answer) {
      setMyBag([...myBag, id]);
    }
  }
  console.log(myBag);

  if (!products) return <h1>Loading</h1>;
  return (
    <ContainerProducts>
      {products.map(({ _id, image, brand, price, description }) => (
        <Product key={_id} onClick={() => clickInProduct(_id)}>
          <img src={image} alt="" />
          <p>{brand}</p>
          <h1>{description}</h1>
          <span>{price}</span>
        </Product>
      ))}
      <BoxSize></BoxSize>
    </ContainerProducts>
  );
}
