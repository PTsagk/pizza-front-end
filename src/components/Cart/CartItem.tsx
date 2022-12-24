import * as React from "react";
import { Component } from "react";
import { IoMdTrash, IoIosPizza } from "react-icons/io";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FormatMoney } from "../../utilities/Formatters";
import { BsXLg } from "react-icons/bs";
import { useCartContext } from "../../Context/cartContext";
function CartItem({ cartItem, canClick, updateClick }) {
  const { addItemToCart, removeItemFromCart, subtractItemFromCart } =
    useCartContext();

  function handleCartItemClick(fn) {
    if (!canClick) return;
    updateClick(false);
    fn();
  }

  return (
    <li
      key={cartItem.id}
      className="flex flex-col justify-between p-3 font-outfit cart-item-c"
    >
      <div className="flex justify-between items-center">
        <div className="text-[#ec1a37] mb-3 text-[22px] font-semibold">
          {cartItem.name}
        </div>
        <button
          className="text-[#ec1a37] mb-3 text-[28px]"
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
            className="text-[#ec1a37] cart-add-btn"
            onClick={() =>
              handleCartItemClick(() => subtractItemFromCart(cartItem.id))
            }
          >
            <BiMinus></BiMinus>
          </button>
          <div className="">{cartItem.count}</div>
          <button
            className="text-[#ec1a37] cart-add-btn"
            onClick={() => handleCartItemClick(() => addItemToCart(cartItem))}
          >
            <BiPlus></BiPlus>
          </button>
        </div>
        <div className="text-black font-regular text-[18px]">
          {FormatMoney(cartItem.count * cartItem.price)}
        </div>
      </div>
    </li>
  );
}

export default CartItem;
