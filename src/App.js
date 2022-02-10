import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/metropolis";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserTokenProvider from "./contexts/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <UserTokenProvider>
        <Routes>
          <Route path={"/entrar"} element={<Login />} />
          <Route path={"/cadastro"} element={<Signup />} />
        </Routes>
      </UserTokenProvider>
    </BrowserRouter>
  );
}
