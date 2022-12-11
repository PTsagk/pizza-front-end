import * as React from "react";
import { Component } from "react";
import "./productCard.css";

interface IProductCard {
  name: string;
  img: string;
  desc: string;
}
function ProductCard({ name, img, desc }: IProductCard) {
  return (
    <li
      className="w-[275px] h-[450px] flex flex-col
    items-center bg-white rounded-[10px] m-5
    overflow-hidden product-card"
    >
      <span
        className="text-[32px] font-semibold font-outfit 
      border-bottom w-[100%] text-center text-primary pizza-card-header"
      >
        {name}
      </span>
      <img
        crossOrigin="anonymous"
        src={`${import.meta.env.VITE_API}/image/${img}`}
        alt={name}
        className="my-4 card-image"
      />
      <p
        className="h-[100%] w-[100%] text-start font-outfit
      text-[16px] font-light overflow-y-auto p-2 px-5"
      >
        {desc}
      </p>
      <button
        className="button text-white bg-primary
      w-[100%] p-3 text-[26px] font-bold"
      >
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;
