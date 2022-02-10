import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/metropolis";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyBag from "./pages/MyBag";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/entrar"} element={<Login />} />
        <Route path={"/cadastro"} element={<Signup />} />
        <Route path={"/carrinho"} element={<MyBag />} />
      </Routes>
    </BrowserRouter>
  );
}
