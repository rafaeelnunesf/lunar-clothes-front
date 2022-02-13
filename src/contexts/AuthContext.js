import { useState } from "react";
import { createContext } from "react";

export const UserToken = createContext();

export default function UserTokenProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  function setAndPersistToken(data) {
    setToken(data);
    localStorage.setItem("token", data);
  }

  return (
    <UserToken.Provider value={{ token, setToken, setAndPersistToken }}>
      {children}
    </UserToken.Provider>
  );
}
