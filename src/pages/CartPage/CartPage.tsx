import * as React from "react";
import { Component } from "react";
import CartPageItem from "../../components/Cart/CartPageItem";
import { useCartContext } from "../../Context/cartContext";
import "./CartPage.css";

function CartPage() {
  const { cartItems } = useCartContext();
  return (
    <div className="w-[100%] min-h-[100vh] flex justify-center items-center  relative pizza-bg">
      <div className="">
        <ul className="cart-page-product-list">
          {Array.from(cartItems.values()).map((item) => (
            <CartPageItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartPage;
