import "@fontsource/metropolis";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserTokenProvider from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";

export default function App() {
  return (
    <BrowserRouter>
      <UserTokenProvider>
        <Routes>
          <Route path={"/entrar"} element={<Login />} />
          <Route path={"/cadastro"} element={<Signup />} />
          <Route path={"/catalog"} element={<Catalog />} />
        </Routes>
      </UserTokenProvider>
    </BrowserRouter>
  );
}
