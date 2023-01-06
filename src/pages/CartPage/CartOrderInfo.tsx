import * as React from "react";
import { Component } from "react";
import CartPageItem from "../../components/Cart/CartPageItem";
import { useCartContext } from "../../Context/cartContext";
function CartOrderInfo() {
  const { cartItems } = useCartContext();
  return (
    <div className="cart-page-step">
      <div className="cart-page-header">Order Info</div>
      <ul className="cart-page-product-list">
        {Array.from(cartItems.values()).map((item) => (
          <CartPageItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default CartOrderInfo;
