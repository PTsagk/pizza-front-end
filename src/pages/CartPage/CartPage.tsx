import * as React from "react";
import { Component, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./CartPage.css";
import CartOrderInfo from "./CartOrderInfo";
import CartAddressInfo from "./CartAddressInfo";
import CartPaymentInfo from "./CartPaymentInfo";
import CartOrderCompleteInfo from "./CartOrderCompleteInfo";
import { useCartContext } from "../../Context/cartContext";
import axios from "axios";

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
  const [selectedAddress, setSelectedAddress] = useState<IAddress>();
  const [activeSelection, setActiveSelection] = useState("addressInfo");
  function handleCheckoutConfirm(e: React.FormEvent) {
    e.preventDefault();
    console.log(e.target["order-doorbell"].value);
    console.log(e.target["order-contact-number"].value);
    console.log(e.target["order-appartment-floor"].value);
    console.log(e.target["order-comments"].value);
    console.log(e.target["payment-method"].value);
    if (!selectedAddress) return;
    console.log(selectedAddress.id);
    console.log(
      Array.from(cartItems.values()).map((item) => {
        return {
          id: item.id,
          count: item.count,
          isPizza: item.isPizza,
        };
      })
    );
    axios
      .post(`${import.meta.env.VITE_API}/order`, {
        doorbell: e.target["order-doorbell"].value,
        phone: e.target["order-contact-number"].value,
        floor: e.target["order-appartment-floor"].value,
        comments: e.target["order-comments"].value,
        payment: e.target["payment-method"].value,
        address: selectedAddress.id,
        cartItems: Array.from(cartItems.values()).map((item) => {
          return {
            id: item.id,
            count: item.count,
            isPizza: item.isPizza,
          };
        }),
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  return (
    <form
      onSubmit={(e) => handleCheckoutConfirm(e)}
      className="w-[100%] min-h-[100vh] flex justify-center items-center  
    relative pizza-bg font-outfit"
    >
      <div className="address-payment-complete-container">
        <CartAddressInfo
          changeSelectedAddress={(address) => setSelectedAddress(address)}
          activeSelection={activeSelection}
          setActiveSelection={setActiveSelection}
        />
        <CartPaymentInfo
          activeSelection={activeSelection}
          setActiveSelection={setActiveSelection}
        />
        <CartOrderCompleteInfo
          activeSelection={activeSelection}
          setActiveSelection={setActiveSelection}
        />
      </div>

      <CartOrderInfo />
    </form>
  );
}

export default CartPage;
