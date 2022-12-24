import * as React from "react";
import { Component } from "react";
import { useCartContext } from "../../Context/cartContext";
import "./productCard.css";

interface IProductCard {
  name: string;
  img: string;
  description: string;
  id: string;
  price: number;
}
function ProductCard({ name, img, description, id, price }: IProductCard) {
  const { addItemToCart } = useCartContext();
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
      {description && (
        <p
          className="h-[100%] w-[100%] text-start font-outfit
      text-[16px] font-light overflow-y-auto px-4"
        >
          {description}
        </p>
      )}
      <button
        className="button"
        onClick={() => addItemToCart({ name, img, description, id, price })}
      >
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;
