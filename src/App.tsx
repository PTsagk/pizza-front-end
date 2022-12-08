import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Pizzas from "./pages/Pizzas/Pizzas";
import MissingPage from "./pages/MissingPage/MissingPage";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/CartPage/Cart";
import ProductProvider from "./Context/productsContext";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Register from "./pages/Register/Register";
import { useState } from "react";
import UserProvider, { useUserContext } from "./Context/userContext";
import UxProvider, { useUxContext } from "./Context/uxContext";
function App() {
  const { isActiveRegister, showRegisterForm } = useUxContext();
  const { user } = useUserContext();
  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh] relative">
      <ProductProvider>
        <Navbar></Navbar>
        <div
          className={`fixed z-40 h-[100%] w-[100%] 
          flex justify-center items-center auth-bg ${
            isActiveRegister && !user ? "" : "hidden"
          }`}
        >
          <RegisterForm closeForm={() => showRegisterForm(false)} />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pizzas" element={<Pizzas />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/*" element={<MissingPage />}></Route>
        </Routes>
        <Footer></Footer>
      </ProductProvider>
    </div>
  );
}

export default App;
