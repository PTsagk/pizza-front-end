import * as React from "react";
import { Component } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FormatMoney } from "../../utilities/Formatters";
import { BiMinus, BiPlus } from "react-icons/bi";
import "./CartPageItem.css";
function CartPageItem({ item }) {
  return (
    <li className="">
      <img
        crossOrigin="anonymous"
        src={`${import.meta.env.VITE_API}/image/${item.img}`}
        alt={item.name}
      />
      <div className="flex flex-col w-[100%] h-[100%] justify-between p-[5px]">
        <div className="flex items-center justify-between w-[100%]">
          <div className="font-semibold text-[18px]">{item.name}</div>
          <button className="text-[26px]">
            <MdDeleteForever />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="max-w-[200px]">
            {item.description.length > 50
              ? item.description.slice(0, 45) + "..."
              : item.description}
          </p>
          <div className="flex w-[175px] justify-between">
            <div className="flex">
              <button className="cart-page-count-button">
                <BiMinus />
              </button>
              <div className="cart-page-count ml-[5px]">{item.count}</div>
              <button className="cart-page-count-button ml-[5px]">
                <BiPlus />
              </button>
            </div>
            <div>{FormatMoney(item.price)}</div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartPageItem;
