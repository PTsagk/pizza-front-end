import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import "./Navbar.css";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import axios from "axios";
import { useUserContext } from "../../Context/userContext";

function Navbar() {
  axios.defaults.withCredentials = true;
  const [register, setRegister] = React.useState(true);
  const [login, setLogin] = React.useState(true);
  const [profile, setProfile] = React.useState(true);
  const { user } = useUserContext();
  //if current user enable profile
  //else show login
  return (
    <>
      <div
        className={`fixed z-40 h-[100%] w-[100%]
      flex justify-center items-center auth-bg ${register ? "hidden" : ""}`}
      >
        <RegisterForm
          closeForm={() => setRegister(true)}
          setLogin={setLogin}
          setRegister={setRegister}
        />
      </div>
      <div
        className={`fixed z-40 h-[100%] w-[100%]
      flex justify-center items-center auth-bg ${login ? "hidden" : ""}`}
      >
        <LoginForm
          closeForm={() => setLogin(true)}
          setLogin={setLogin}
          setRegister={setRegister}
        />
      </div>
      <nav className="nav-bar z-50">
        <h1>LOGO</h1>
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/pizzas"}>Pizzas</Link>
          <Link to={"/drinks"}>Drinks</Link>
          <Link to={"/desserts"}>Desserts</Link>
        </div>
        <div className="cart-and-profile">
          <button
            onClick={async () => {
              const token = await axios.get(
                "http://localhost:5000/users/token"
              );

              console.log(token);
            }}
            className="cart"
          >
            <FaShoppingCart></FaShoppingCart>
          </button>
          <button onClick={() => setLogin(!login)} className="profile-icon">
            <RiAccountCircleFill></RiAccountCircleFill>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
