import { useState } from "react";
import { createContext } from "react";

export const UserToken = createContext();

export default function UserTokenProvider({ children }) {
  const [token, setToken] = useState({});

  function setAndPersistToken(data) {
    setToken(data);
    localStorage.setItem("dataUser", JSON.stringify(data));
  }

  return (
    <UserToken.Provider value={{ token, setToken, setAndPersistToken }}>
      {children}
    </UserToken.Provider>
  );
}
