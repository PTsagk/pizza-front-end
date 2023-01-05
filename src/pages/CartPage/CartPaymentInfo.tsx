import * as React from "react";
import { Component } from "react";
import { BsCashStack, MdOutlinePayment, TbBrandPaypal } from "react-icons/all";
function CartPaymentInfo() {
  return (
    <div className="cart-page-step">
      <div className="cart-page-header">Payment Info</div>
      <div className="flex flex-col items-start">
        <label className="payment-button-c" htmlFor="payment-cash">
          <input type="radio" id="payment-cash" name="payment-method" />
          <div className="radio-button-mock"></div>
          <div className="w-[100%] flex justify-center items-center">
            <div>Cash</div>
            <BsCashStack className="ml-[10px]" />
          </div>
          <div className="payment-fill-bar"></div>
        </label>
        <label className="payment-button-c" htmlFor="payment-paypal">
          <input type="radio" id="payment-paypal" name="payment-method" />
          <div className="radio-button-mock"></div>
          <div className="w-[100%] flex justify-center items-center">
            <div>Paypal</div>
            <TbBrandPaypal className="ml-[10px]" />
          </div>
          <div className="payment-fill-bar"></div>
        </label>
        <label className="payment-button-c" htmlFor="payment-credit">
          <input type="radio" id="payment-credit" name="payment-method" />
          <div className="radio-button-mock"></div>
          <div className="w-[100%] flex justify-center items-center">
            <div>Credit</div>
            <MdOutlinePayment className="ml-[10px]" />
          </div>
          <div className="payment-fill-bar"></div>
        </label>
      </div>
    </div>
  );
}

export default CartPaymentInfo;
