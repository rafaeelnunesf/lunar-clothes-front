import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTokenProvider from "./contexts/AuthContext";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import MyBag from "./pages/MyBag";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <UserTokenProvider>
        <Routes>
          <Route path={"/"} element={<Catalog />} />
          <Route path={"/entrar"} element={<Login />} />
          <Route path={"/cadastro"} element={<Signup />} />
          <Route path={"/carrinho"} element={<MyBag />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
      </UserTokenProvider>
    </BrowserRouter>
  );
}
