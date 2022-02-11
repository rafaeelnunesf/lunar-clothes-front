import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTokenProvider from "./contexts/AuthContext";
import "@fontsource/metropolis";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import MyBag from "./pages/MyBag";
import MyBagProvider from "./contexts/MyBagContext";

export default function App() {
  return (
    <BrowserRouter>
      <UserTokenProvider>
        <MyBagProvider>
          <Routes>
            <Route path={"/entrar"} element={<Login />} />
            <Route path={"/cadastro"} element={<Signup />} />
            <Route path={"/catalog"} element={<Catalog />} />
            <Route path={"/carrinho"} element={<MyBag />} />
          </Routes>
        </MyBagProvider>
      </UserTokenProvider>
    </BrowserRouter>
  );
}
