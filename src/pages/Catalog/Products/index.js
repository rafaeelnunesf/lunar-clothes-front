import {
  ContainerProducts,
  Product,
} from "../../../components/Products/index.js";
import { useEffect, useState } from "react";

import api from "../../../services/api.js";
import BoxSize from "../BoxSize/index.js";
export default function Products() {
  const [products, setProducts] = useState();
  const [popup, setPopup] = useState();

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

  if (!products) return <h1>Loading</h1>;
  return (
    <ContainerProducts>
      {products.map(({ _id, image, brand, description, price }) => (
        <Product key={_id} onClick={() => setPopup(_id)}>
          <img src={image} alt="" />
          <p>{brand}</p>
          <h1>{description}</h1>
          <span>{price}</span>
        </Product>
      ))}
      {popup ? <BoxSize popup={popup} setPopup={setPopup} /> : ""}
    </ContainerProducts>
  );
}
