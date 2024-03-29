import * as React from "react";
import { Component, useState, useEffect } from "react";
import { useCartContext } from "../../Context/cartContext";
import "./Cart.css";

import { useLocation } from "react-router";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart() {
  const location = useLocation();
  // const [active, setActive] = useState(false);
  const [destroy, setDestroy] = useState(false);
  const [canClick, setCanClick] = useState(true);

  const { cartItems, isActive, setIsActive } = useCartContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (destroy) {
        setIsActive(false);
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
    setIsActive(true);
    setDestroy(false);
  }

  // Disable cart when route/url changes
  useEffect(() => {
    setIsActive(false);
  }, [location]);

  return (
    <div
      onMouseEnter={() => showCart()}
      onMouseLeave={() => destroyCart()}
      id="cart"
      className={` bg-white absolute py-[10px]
      top-[60px] -right-[40px] cart-c ${!isActive && "hidden"}`}
    >
      <div className="w-[475px] max-h-[400px] px-[10px] pb-[20px] overflow-y-auto">
        <div className="cart-notch"></div>
        {cartItems.size == 0 && (
          <div className="empty-cart-c">
            {/* <IoIosPizza /> */}
            No pizzas in here!
          </div>
        )}
        <ul className="mt-3">
          {Array.from(cartItems.values()).map((cartItem, index) => (
            <CartItem
              key={index}
              cartItem={cartItem}
              canClick={canClick}
              updateClick={(bool: boolean) => setCanClick(bool)}
            />
          ))}
        </ul>
        {cartItems.size > 0 && (
          <div className="flex justify-end pt-[20px]">
            <Link to={"/cart"} className="checkout-button">
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
