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
        className={`pizza-card-header text-center font-outfit 
      ${name.length >= 18 && "product-card-header-animation"}`}
      >
        {name}
      </span>
      <div className="border-bottom"></div>
      <img
        crossOrigin="anonymous"
        src={`${import.meta.env.VITE_API}/image/${img}`}
        alt={name}
        className={`my-4 card-image`}
      />
      {desc && (
        <p
          className="h-[100%] w-[100%] text-start font-outfit
      text-[16px] font-light overflow-y-auto p-1 px-5"
        >
          {desc}
        </p>
      )}
      <button className="button">Add to Cart</button>
    </li>
  );
}

export default ProductCard;
