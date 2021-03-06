import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTokenProvider from "./contexts/AuthContext";
import OrderContextProvider from "./contexts/OrderContext";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import MyBag from "./pages/MyBag";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

export const pathWithoutFooter = ["/register", "/checkout"];

export default function App() {
  return (
    <BrowserRouter>
      <UserTokenProvider>
        <OrderContextProvider>
          <Routes>
            <Route path={"/"} element={<Catalog />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Signup />} />
            <Route path={"/mybag"} element={<MyBag />} />
            <Route path={"/checkout"} element={<Checkout />} />
          </Routes>
          <Footer />
        </OrderContextProvider>
      </UserTokenProvider>
    </BrowserRouter>
  );
}
