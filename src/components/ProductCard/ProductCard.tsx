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
    <li className="product-card">
      <span
        className="text-[24px] font-semibold font-outfit 
        w-[100%] text-center text-primary pizza-card-header"
      >
        {name}
      </span>
      <div className="border-bottom"></div>
      <img
        crossOrigin="anonymous"
        src={`${import.meta.env.VITE_API}/image/${img}`}
        alt={name}
        className="my-4 card-image"
      />
      <p
        className="h-[100%] w-[100%] text-start font-outfit
      text-[16px] font-light overflow-y-auto p-1 px-5"
      >
        {desc}
      </p>
      <button
        className="button text-white bg-primary
      w-[100%] p-2 text-[20px] font-semibold"
      >
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;
