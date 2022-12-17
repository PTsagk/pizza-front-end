import * as React from "react";
import { Component, useState, useEffect } from "react";
import { useCartContext } from "../../Context/cartContext";
import "./Cart.css";
import { IoMdTrash } from "react-icons/io";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FormatMoney } from "../../utilities/Formatters";
import { BsXLg } from "react-icons/bs";
function Cart({ toggle = false }) {
  const [active, setActive] = useState(false);
  const [destroy, setDestroy] = useState(false);
  const [canClick, setCanClick] = useState(true);

  const { cartItems, addItemToCart, removeItemFromCart, subtractItemFromCart } =
    useCartContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (destroy) {
        // setActive(false);
        // setDestroy(false);
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [destroy]);

  useEffect(() => {
    if (!canClick) {
      setTimeout(() => {
        setCanClick(true);
      }, 1000);
    }
  }, [canClick]);

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

  function handleCartItemClick(fn) {
    if (!canClick) return;
    setCanClick(false);
    fn();
  }
  return (
    <div
      onMouseEnter={() => showCart()}
      onMouseLeave={() => destroyCart()}
      id="cart"
      className={`w-[450px] px-[10px] py-[20px] bg-white absolute 
      top-[60px] -right-[40px] cart-c ${false && "hidden"}`}
    >
      <div className="cart-notch"></div>
      <ul className="mt-3">
        {Array.from(cartItems.values()).map((cartItem) => (
          <li
            key={cartItem.id}
            className="flex flex-col justify-between p-3 font-outfit cart-item-c"
          >
            <div className="flex justify-between items-center">
              <div className="text-primary mb-3 text-[22px] font-semibold">
                {cartItem.name}
              </div>
              <button
                className="text-primary mb-3 text-[28px]"
                onClick={() =>
                  handleCartItemClick(() => removeItemFromCart(cartItem.id))
                }
              >
                <BsXLg></BsXLg>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex text-black items-start text-[22px]">
                <button
                  className="text-primary cart-add-btn"
                  onClick={() =>
                    handleCartItemClick(() => subtractItemFromCart(cartItem.id))
                  }
                >
                  <BiMinus></BiMinus>
                </button>
                <div className="">{cartItem.count}</div>
                <button
                  className="text-primary cart-add-btn"
                  onClick={() =>
                    handleCartItemClick(() => addItemToCart(cartItem))
                  }
                >
                  <BiPlus></BiPlus>
                </button>
              </div>
              <div className="text-black font-regular text-[18px]">
                {FormatMoney(cartItem.count * cartItem.price)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
