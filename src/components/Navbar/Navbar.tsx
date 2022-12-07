import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import "./Navbar.css";
import { useUserContext } from "../../Context/userContext";
import { useUxContext } from "../../Context/uxContext";

function Navbar() {
  const { user } = useUserContext();
  const { showRegisterForm } = useUxContext();

  return (
    <nav className="nav-bar z-50">
      <h1>LOGO</h1>
      <div className="nav-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/pizzas"}>Pizzas</Link>
        <Link to={"/drinks"}>Drinks</Link>
        <Link to={"/desserts"}>Desserts</Link>
      </div>
      <div className="cart-and-profile">
        <Link to={"/cart"} className="cart">
          <FaShoppingCart></FaShoppingCart>
        </Link>
        {user ? (
          <Link to={"/profile"} className="profile-icon">
            <RiAccountCircleFill></RiAccountCircleFill>
          </Link>
        ) : (
          <button
            className="bg-primary rounded-[10px] profile-icon px-3"
            onClick={() => showRegisterForm(true)}
          >
            Register
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
