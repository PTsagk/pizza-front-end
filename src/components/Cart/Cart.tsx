import * as React from "react";
import { Component, useState, useEffect } from "react";
import { useCartContext } from "../../Context/cartContext";
import "./Cart.css";

import { useLocation } from "react-router";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart({ toggle = false }) {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [destroy, setDestroy] = useState(false);
  const [canClick, setCanClick] = useState(true);

  const { cartItems, addItemToCart, removeItemFromCart, subtractItemFromCart } =
    useCartContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (destroy) {
        setActive(false);
        setDestroy(false);
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [destroy]);

  useEffect(() => {
    if (!canClick) {
      setTimeout(() => {
        setCanClick(true);
      }, 800);
    }
  }, [canClick]);

  function destroyCart() {
    setDestroy(true);
  }

  function showCart() {
    setActive(true);
    setDestroy(false);
  }

  // When toggled from navbar's icon , enable the cart
  useEffect(() => {
    setActive(true);
  }, [toggle]);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 100);
  }, []);

  // Disable cart when route/url changes
  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <div
      onMouseEnter={() => showCart()}
      onMouseLeave={() => destroyCart()}
      id="cart"
      className={`w-[450px] px-[10px] py-[20px] bg-white absolute 
      top-[60px] -right-[40px] cart-c ${!active && "hidden"}`}
    >
      <div className="cart-notch"></div>
      {cartItems.size == 0 && (
        <div className="empty-cart-c">
          {/* <IoIosPizza /> */}
          No pizzas in here!
        </div>
      )}
      <ul className="mt-3">
        {Array.from(cartItems.values()).map((cartItem) => (
          <CartItem
            cartItem={cartItem}
            canClick={canClick}
            updateClick={(bool: boolean) => setCanClick(bool)}
          />
        ))}
      </ul>
      <div className="flex justify-end pt-[20px]">
        <Link to={"/cart"} className="checkout-button">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
