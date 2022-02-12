import { createContext } from "react";
import { useState } from "react";

export const productsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState();
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <productsContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}
