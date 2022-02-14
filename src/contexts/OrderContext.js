import { createContext, useState } from "react";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [total, setTotal] = useState();

  return (
    <OrderContext.Provider value={{ total, setTotal }}>
      {children}
    </OrderContext.Provider>
  );
}
