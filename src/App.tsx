import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Pizzas from "./pages/Pizzas/Pizzas";
import MissingPage from "./pages/MissingPage/MissingPage";
import Admin from "./pages/Admin/Admin";
import CartPage from "./pages/CartPage/CartPage";
import ProductProvider from "./Context/productsContext";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { useEffect, useState } from "react";
import UserProvider, { useUserContext } from "./Context/userContext";
import UxProvider, { useUxContext } from "./Context/uxContext";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Drinks from "./pages/Drinks/Drinks";
import ProtectedRoute from "./ProtectedRoute";
import CartProvider from "./Context/cartContext";
import TokenPage from "./pages/TokenPage/TokenPage";
function App() {
  // const [closeShit, setCloseShit] = useState(false);
  function popstate(e) {
    console.log(e);
  }
  useEffect(() => {
    window.addEventListener("popstate", (e) => popstate(e));
    return () => window.removeEventListener("popstate", (e) => popstate(e));
  }, []);
  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh] relative">
      <ProductProvider>
        <CartProvider>
          <Navbar></Navbar>
          {/* <div
          className={`fixed z-40 h-[100%] w-[100%] 
          flex justify-center items-center auth-bg ${
            !closeShit ? "" : "hidden"
          }`}
        >
          <ProfileCard close={() => setCloseShit(true)}></ProfileCard>
        </div> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pizzas" element={<Pizzas />}></Route>
            <Route path="/drinks" element={<Drinks />}></Route>

            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route path="/admin/*" element={<Admin />}></Route>
            </Route>
            <Route path="/token/verify/:token" element={<TokenPage />}></Route>
            <Route path="/*" element={<MissingPage />}></Route>
          </Routes>
          <Footer></Footer>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
