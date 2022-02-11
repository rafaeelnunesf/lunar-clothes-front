import { useState } from "react";
import { createContext } from "react";

export const MyBag = createContext();

export default function MyBagProvider({ children }) {
  const [myBag, setMyBag] = useState([]);

  return (
    <MyBag.Provider value={{ myBag, setMyBag }}>{children}</MyBag.Provider>
  );
}
