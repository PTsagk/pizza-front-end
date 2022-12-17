import * as React from "react";
import { Component, useState, useEffect } from "react";
import "./Cart.css";

function Cart({ toggle = false }) {
  const [active, setActive] = useState(false);
  const [destroy, setDestroy] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (destroy) {
        setActive(false);
        setDestroy(false);
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [destroy]);

  function destroyCart() {
    setDestroy(true);
  }

  function showCart() {
    setActive(true);
    setDestroy(false);
  }

  useEffect(() => {
    setActive(true);
  }, [toggle]);
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 100);
  }, []);
  return (
    <div
      onMouseEnter={() => showCart()}
      onMouseLeave={() => destroyCart()}
      id="cart"
      className={`w-[400px] h-[200px] bg-white absolute 
      top-[60px] -right-[40px] cart-c ${!active && "hidden"}`}
    >
      <div className="cart-notch"></div>
      <ul></ul>
    </div>
  );
}

export default Cart;
