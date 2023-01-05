import * as React from "react";
import { Component, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./CartPage.css";
import CartOrderInfo from "./CartOrderInfo";
import CartAddressInfo from "./CartAddressInfo";
import CartPaymentInfo from "./CartPaymentInfo";

interface IAddress {
  address: string;
  addressNumber: string;
  city: string;
  id: string;
  phoneNumber: string;
  user_id: string;
}

function CartPage() {
  return (
    <div
      className="w-[100%] min-h-[100vh] flex justify-center items-center  
    relative pizza-bg font-outfit"
    >
      <CartOrderInfo />
      <CartAddressInfo />
      <CartPaymentInfo />
    </div>
  );
}

export default CartPage;
