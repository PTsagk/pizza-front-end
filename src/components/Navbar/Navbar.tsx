import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import "./Navbar.css";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import axios from "axios";
import { useUserContext } from "../../Context/userContext";
import Untitled from "../../assets/Untitled.svg";
import { useUxContext } from "../../Context/uxContext";
import Cart from "../Cart/Cart";

function Navbar() {
  axios.defaults.withCredentials = true;

  const [profile, setProfile] = React.useState(true);
  const [toggleCart, setToggleCart] = React.useState(false);
  const { user, isAdmin } = useUserContext();
  const { isActiveLogin, isActiveRegisterForm, showLoginForm } = useUxContext();
  //if current user enable profile
  //else show login
  return (
    <>
      <div
        className={`auth-form auth-bg ${
          !user && isActiveRegisterForm ? "" : "hidden"
        }`}
      >
        <RegisterForm />
      </div>
      <div
        className={`auth-form auth-bg ${
          !user && isActiveLogin ? "" : "hidden"
        }`}
      >
        <LoginForm />
      </div>
      <nav className="nav-bar z-50">
        <h1>LOGO</h1>
        <div className="nav-links">
          <Link to={"/"} className={"hover:text-white"}>
            Home
          </Link>
          <Link to={"/pizzas"} className={"hover:text-white"}>
            Pizzas
          </Link>
          <Link to={"/drinks"} className={"hover:text-white"}>
            Drinks
          </Link>
          <Link to={"/desserts"} className={"hover:text-white"}>
            Desserts
          </Link>
          {isAdmin && (
            <Link to={"/admin/products"} className={"hover:text-white"}>
              Admin
            </Link>
          )}
        </div>
        <div className="cart-and-profile">
          <div className="relative">
            <Link
              to={"/cart"}
              onMouseEnter={() => setToggleCart((prev) => !prev)}
              className="cart hover:text-white"
            >
              <FaShoppingCart></FaShoppingCart>
            </Link>
            <Cart toggle={toggleCart} />
          </div>
          {user && (
            <Link
              to={"/profile"}
              className="profile-icon hover:text-black hover:bg-white"
            >
              {user.fullname.charAt(0).toUpperCase()}
            </Link>
          )}
          {!user && (
            <button
              onClick={() => showLoginForm(true)}
              className="nav-login-button rounded-[5px] px-4 ml-[2rem] font-regular"
            >
              login
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
