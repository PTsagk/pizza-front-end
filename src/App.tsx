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
import { useState } from "react";
import UserProvider from "./Context/userContext";
import UxProvider, { useUxContext } from "./Context/uxContext";
function App() {
  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh] relative">
      <ProductProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pizzas" element={<Pizzas />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/*" element={<MissingPage />}></Route>
        </Routes>
        <Footer></Footer>
      </ProductProvider>
    </div>
  );
}

export default App;
