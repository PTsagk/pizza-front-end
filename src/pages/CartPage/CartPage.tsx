import * as React from "react";
import { Component, useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import "./CartPage.css";
import CartOrderInfo from "./CartOrderInfo";
import CartAddressInfo from "./CartAddressInfo";
import CartPaymentInfo from "./CartPaymentInfo";
import CartOrderCompleteInfo from "./CartOrderCompleteInfo";
import { useCartContext } from "../../Context/cartContext";
import axios from "axios";
import { useAddressContext } from "../../Context/addressContext";
import { useUserContext } from "../../Context/userContext";

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
  const { addresses } = useAddressContext();
  const [activeSelection, setActiveSelection] = useState("addressInfo");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [comments, setComments] = useState("Cash");
  const [selectedAddress, setSelectedAddress] = useState<IAddress>();
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const { user } = useUserContext();
  const [addressFormInfo, setAddressFormInfo] = useState({
    bellname: user?.fullname,
    floor: "1st floor",
  });

  useEffect(() => {
    if (addresses.length === 0) return;
    setSelectedAddress(addresses[0]);
  }, [addresses]);

  useEffect(() => {
    if (user)
      setAddressFormInfo((prev) => {
        prev.bellname = user.fullname;
        return prev;
      });
  }, [user]);

  useEffect(() => {
    if (addresses.length === 0) return;
    setSelectedAddress(addresses[selectedAddressIndex]);
  }, [selectedAddressIndex]);

  function handleCheckoutConfirm(e: React.FormEvent) {
    e.preventDefault();
    console.log(comments);
    console.log(paymentMethod);
    console.log(addressFormInfo);
    console.log(
      Array.from(cartItems.values()).map((item) => {
        return {
          id: item.id,
          count: item.count,
          isPizza: item.isPizza,
        };
      })
    );
    if (!selectedAddress) return;
    console.log(selectedAddress.id);
    axios
      .post(`${import.meta.env.VITE_API}/order`, {
        doorbell: addressFormInfo.bellname,
        phone: selectedAddress.phoneNumber,
        floor: addressFormInfo.floor,
        comments: comments,
        payment: paymentMethod,
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
      className="w-[100%] min-h-[120vh] flex justify-center items-center  
    relative pizza-bg font-outfit"
    >
      <div className="address-payment-complete-container">
        <CartAddressInfo
          // changeSelectedAddress={(address) => setSelectedAddress(address)}
          activeSelection={activeSelection}
          setActiveSelection={(str) => setActiveSelection(str)}
          changeSelectedAddress={(index) => setSelectedAddressIndex(index)}
          formInfo={addressFormInfo}
          selectedAddress={selectedAddress || null}
          changeAddressFormInfo={(obj) => setAddressFormInfo(obj)}
        />
        <CartPaymentInfo
          activeSelection={activeSelection}
          setActiveSelection={setActiveSelection}
          changePaymentMethod={(method) => setPaymentMethod(method)}
        />
        <CartOrderCompleteInfo
          activeSelection={activeSelection}
          setActiveSelection={setActiveSelection}
          paymentMethod={paymentMethod}
          selectedAddress={selectedAddress}
          comments={comments}
          setComments={(comments) => setComments(comments)}
        />
      </div>

      <CartOrderInfo />
    </form>
  );
}

export default CartPage;
