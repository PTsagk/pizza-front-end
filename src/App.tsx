import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Pizzas from "./pages/Pizzas/Pizzas";
import MissingPage from "./pages/MissingPage/MissingPage";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div className="overflow-x-hidden w-[100vw] h-[100vh] relative">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pizzas" element={<Pizzas />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/*" element={<MissingPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
