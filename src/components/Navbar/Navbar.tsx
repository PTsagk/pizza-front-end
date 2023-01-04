import React, { useState } from "react";
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
import { useCartContext } from "../../Context/cartContext";

enum NavsEnum {
  home,
  pizzas,
  drinks,
  desserts,
}

function Navbar() {
  axios.defaults.withCredentials = true;

  const [profile, setProfile] = React.useState(true);
  const [navSelected, setNavSelected] = useState(0);
  const { setIsActive } = useCartContext();
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
          <Link
            to={"/"}
            className={"hover:text-white"}
            onClick={() => {
              setNavSelected(NavsEnum.home);
            }}
          >
            {navSelected == NavsEnum.home && (
              <div className="thingie-test"></div>
            )}
            Home
          </Link>
          <Link
            to={"/pizzas"}
            className={"hover:text-white"}
            onClick={() => {
              setNavSelected(NavsEnum.pizzas);
            }}
          >
            {navSelected == NavsEnum.pizzas && (
              <div className="thingie-test"></div>
            )}
            Pizzas
          </Link>
          <Link
            to={"/drinks"}
            className={"hover:text-white"}
            onClick={() => {
              setNavSelected(NavsEnum.drinks);
            }}
          >
            {navSelected == NavsEnum.drinks && (
              <div className="thingie-test"></div>
            )}
            Drinks
          </Link>
          <Link
            to={"/desserts"}
            className={"hover:text-white"}
            onClick={() => {
              setNavSelected(NavsEnum.desserts);
            }}
          >
            {navSelected == NavsEnum.desserts && (
              <div className="thingie-test"></div>
            )}
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
              onMouseEnter={() => setIsActive(true)}
              className="cart hover:text-white"
            >
              <FaShoppingCart></FaShoppingCart>
            </Link>
            <Cart />
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
