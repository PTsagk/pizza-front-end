import * as React from "react";
import { Component, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./CartPage.css";
import CartOrderInfo from "./CartOrderInfo";
import CartAddressInfo from "./CartAddressInfo";
import CartPaymentInfo from "./CartPaymentInfo";
import { useCartContext } from "../../Context/cartContext";

interface IAddress {
  address: string;
  addressNumber: string;
  city: string;
  id: string;
  phoneNumber: string;
  user_id: string;
}

function CartPage() {
  const { cartItems } = useCartContext();
  function handleCheckoutConfirm(e: React.FormEvent) {
    // console.log(e);
    console.log(e.target["order-doorbell"].value);
    console.log(e.target["order-contact-number"].value);
    console.log(e.target["order-appartment-floor"].value);
    console.log(e.target["order-comments"].value);
    console.log(e.target["payment-method"].value);

    console.log(
      Array.from(cartItems.values()).map((item) => {
        return {
          id: item.id,
          count: item.count,
          isPizza: item.isPizza,
        };
      })
    );
    e.preventDefault();
  }

  return (
    <form
      onSubmit={(e) => handleCheckoutConfirm(e)}
      className="w-[100%] min-h-[100vh] flex justify-center items-center  
    relative pizza-bg font-outfit"
    >
      <CartOrderInfo />
      <CartAddressInfo />
      <CartPaymentInfo />
    </form>
  );
}

export default CartPage;
