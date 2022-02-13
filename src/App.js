import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTokenProvider from "./contexts/AuthContext";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import MyBag from "./pages/MyBag";

export default function App() {
  return (
    <BrowserRouter>
      <UserTokenProvider>
        <Routes>
          <Route path={"/entrar"} element={<Login />} />
          <Route path={"/cadastro"} element={<Signup />} />
          <Route path={"/catalog"} element={<Catalog />} />
          <Route path={"/carrinho"} element={<MyBag />} />
        </Routes>
      </UserTokenProvider>
    </BrowserRouter>
  );
}
