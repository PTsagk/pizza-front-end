// import * as React from "react";
// import { Component } from "react";
// import { BsCashStack, MdOutlinePayment, TbBrandPaypal } from "react-icons/all";
// function CartPaymentInfo() {
//   React.useEffect(() => {}, []);
//   return (
//     <div className="cart-page-step">
//       <div className="cart-page-header">Payment Info</div>
//       <div className="flex flex-col items-start">
//         <label className="payment-button-c" htmlFor="payment-cash">
//           <input
//             type="radio"
//             id="payment-cash"
//             name="payment-method"
//             value="cash"
//             defaultChecked
//           />
//           <div className="radio-button-mock"></div>
//           <div className="w-[100%] flex justify-center items-center">
//             <div>Cash</div>
//             <BsCashStack className="ml-[10px]" />
//           </div>
//           <div className="payment-fill-bar"></div>
//         </label>
//         <label className="payment-button-c" htmlFor="payment-paypal">
//           <input
//             type="radio"
//             id="payment-paypal"
//             name="payment-method"
//             value="paypal"
//           />
//           <div className="radio-button-mock"></div>
//           <div className="w-[100%] flex justify-center items-center">
//             <div>Paypal</div>
//             <TbBrandPaypal className="ml-[10px]" />
//           </div>
//           <div className="payment-fill-bar"></div>
//         </label>
//         <label className="payment-button-c" htmlFor="payment-credit">
//           <input
//             type="radio"
//             id="payment-credit"
//             name="payment-method"
//             value="credit"
//           />
//           <div className="radio-button-mock"></div>
//           <div className="w-[100%] flex justify-center items-center">
//             <div>Credit</div>
//             <MdOutlinePayment className="ml-[10px]" />
//           </div>
//           <div className="payment-fill-bar"></div>
//         </label>
//         <div className="flex justify-center w-[100%]">
//           <button type="submit" className="proceed-button">
//             Proceed
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPaymentInfo;

import React from "react";
import {
  BsCashStack,
  MdOutlinePayment,
  TbBrandPaypal,
  ImArrowDown2,
  ImArrowUp2,
} from "react-icons/all";

function CartPaymentInfo({
  activeSelection,
  setActiveSelection,
  changePaymentMethod,
}) {
  return (
    <div
      className={
        activeSelection === "paymentInfo"
          ? "cart-payment-info-container-active"
          : "cart-payment-info-container"
      }
    >
      <h1>
        <div className="number">2</div>Payment
      </h1>
      <div className="payment-and-next-step">
        <div className="payment-options">
          <button
            type="button"
            className="payment-option"
            onClick={() => changePaymentMethod("Paypal")}
          >
            <TbBrandPaypal className="payment-icon"></TbBrandPaypal>Paypal
          </button>
          <button
            type="button"
            className="payment-option"
            onClick={() => changePaymentMethod("Credit")}
          >
            <MdOutlinePayment className="payment-icon"></MdOutlinePayment>Credit
            Card
          </button>
          <button
            type="button"
            className="payment-option"
            onClick={() => changePaymentMethod("Cash")}
          >
            <BsCashStack className="payment-icon"></BsCashStack>Cash
          </button>
        </div>
        <div className="order-moving-buttons">
          <button
            type="button"
            className="next-step-button"
            onClick={() => {
              setActiveSelection("addressInfo");
            }}
          >
            <ImArrowUp2 className="icon"></ImArrowUp2> Previous Step
          </button>
          <button
            type="button"
            className="next-step-button"
            onClick={() => {
              setActiveSelection("completeInfo");
            }}
          >
            <ImArrowDown2 className="icon"></ImArrowDown2> Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPaymentInfo;
