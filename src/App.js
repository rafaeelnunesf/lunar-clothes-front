import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/metropolis";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/entrar"} element={<Login />} />
        <Route path={"/cadastro"} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
