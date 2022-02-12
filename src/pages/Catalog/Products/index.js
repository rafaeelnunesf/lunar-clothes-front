import { ContainerProducts, Product } from "../../../style/Products/index.js";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../services/api.js";
import { productsContext } from "../../../contexts/ProductContext.js";
export default function Products({ isSelected, setIsSelected }) {
  const [products, setProducts] = useState();
  const { setSelectedProduct } = useContext(productsContext);
  useEffect(() => {
    getProductsFromApi();
  }, []);

  async function getProductsFromApi() {
    try {
      const dataEntries = await getProducts();
      setProducts(dataEntries.data);
    } catch (error) {
      console.log(error);
    }
  }
  function handleClick(item) {
    isSelected ? setIsSelected(false) : setIsSelected(true);
    setSelectedProduct(item);
  }
  if (!products) return <h1>Loading</h1>;
  return (
    <ContainerProducts>
      {products.map((item) => (
        <Product key={item._id} onClick={() => handleClick(item)}>
          <img src={item.image} alt="" />
          <p>{item.brand}</p>
          <h1>{item.description}</h1>
          <span>{`R$ ${item.price}`}</span>
        </Product>
      ))}
    </ContainerProducts>
  );
}
