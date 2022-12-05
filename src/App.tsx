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
function App() {
  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh] relative">
      <ProductProvider>
        <Navbar></Navbar>
<<<<<<< HEAD
        <div
          className="absolute  h-[100%] w-[100%] 
=======
        {/* <div
          className="absolute z-50 h-[100%] w-[100%] 
>>>>>>> 168d0b363236b0f708a27cfee974a9648a7540df
        flex justify-center items-center"
        >
          <RegisterForm />
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
