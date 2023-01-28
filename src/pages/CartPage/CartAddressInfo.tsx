// import * as React from "react";
// import { Component, useState } from "react";
// import { Dropdown } from "react-bootstrap";
// import DropdownButton from "react-bootstrap/esm/DropdownButton";
// import CartPageItem from "../../components/Cart/CartPageItem";
// import MyDropdown from "../../components/Dropdown/MyDropdown";
// import MyDropdownOption from "../../components/Dropdown/MyDropdownOption";
// import { useCartContext } from "../../Context/cartContext";
// import { useUserContext } from "../../Context/userContext";
// import { useAddressContext } from "../../Context/addressContext";
// import "./CartPage.css";
// import {
//   HiLocationMarker,
//   AiFillPhone,
//   GiStairs,
//   MdDoorbell,
// } from "react-icons/all";
// import CartOrderInfo from "./CartOrderInfo";

// interface IAddress {
//   address: string;
//   addressNumber: string;
//   city: string;
//   id: string;
//   phoneNumber: string;
//   user_id: string;
// }
// function CartAddressInfo({ changeSelectedAddress }) {
//   const [isActive, setIsActive] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState<IAddress>();

//   const { addresses } = useAddressContext();

//   const [comments, setComments] = useState("");
//   const [phone, setPhone] = useState(addresses[0]?.phoneNumber);

//   React.useEffect(() => {
//     if (!addresses) return;
//     setSelectedAddress(addresses[0]);
//   }, [addresses]);

//   function handleCommentsChange(str: string) {
//     if (str.length > 100) return;
//     setComments(str);
//   }

//   function handleChangeAddress(address: IAddress) {
//     setSelectedAddress(address);
//     changeSelectedAddress(address);
//   }

//   return (
//     <div className="cart-page-step">
//       <div className="cart-page-header">Address Info</div>
//       <div className="cart-address-field-header">Address:</div>
//       <div
//         className="flex flex-col relative
//         justify-center overflow-visible items-center w-[250px]"
//       >
//         <button
//           type="button"
//           className="w-[100%] bg-white rounded-top p-2 flex justify-center items-center"
//           onClick={() => setIsActive((prev) => !prev)}
//         >
//           <HiLocationMarker className="mr-[10px] text-[22px]" />{" "}
//           {`${selectedAddress?.address} ${selectedAddress?.addressNumber}`}
//         </button>
//         <ul
//           className={`cart-address-list flex flex-col justify-center absolute
//             items-center top-[100%] bg-white w-[100%] border p-0
//           ${!isActive && "hidden"}`}
//         >
//           {addresses?.map((add) => (
//             <li className="cart-address-option" key={add.id}>
//               <button type="button" onClick={() => handleChangeAddress(add)}>
//                 <HiLocationMarker className="mr-[10px] text-[22px]" />{" "}
//                 {`${add.address} ${add.addressNumber}`}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <label
//         className="cart-address-field-header mt-[10px]"
//         htmlFor="order-contact-number"
//       >
//         Contact Number:
//       </label>
//       <div className="relative flex items-center">
//         <input
//           name="order-contact-number"
//           className="cart-address-info-input"
//           type="number"
//           id="order-contact-number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <AiFillPhone className="absolute right-[5px] text-[20px]" />
//       </div>
//       <label
//         className="cart-address-field-header mt-[10px]"
//         htmlFor="order-appartment-floor"
//       >
//         Appt Floor:
//       </label>
//       <div className="relative flex items-center">
//         <input
//           name="order-appartment-floor"
//           className="cart-address-info-input"
//           type="number"
//           id="order-appartment-floor"
//         />
//         <GiStairs className="absolute right-[5px] text-[20px]" />
//       </div>
//       <label
//         className="cart-address-field-header mt-[10px]"
//         htmlFor="order-doorbell"
//       >
//         Doorbell:
//       </label>
//       <div className="relative flex items-center">
//         <input
//           className="cart-address-info-input"
//           type="text"
//           id="order-doorbell"
//           name="order-doorbell"
//         />
//         <MdDoorbell className="absolute right-[5px] text-[20px]" />
//       </div>

//       <div className="cart-address-field-header mt-[50px]">Comments:</div>
//       <div className="relative">
//         <textarea
//           className="cart-comments"
//           onChange={(e) => handleCommentsChange(e.target.value)}
//           value={comments}
//           name="order-comments"
//         ></textarea>
//         <div className="cart-comments-counter">{100 - comments.length}/100</div>
//       </div>
//     </div>
//   );
// }

// export default CartAddressInfo;

import React, { useState, useEffect } from "react";
import { ImArrowDown2 } from "react-icons/all";
import { useAddressContext } from "../../Context/addressContext";
import { useUserContext } from "../../Context/userContext";

function CartAddressInfo({
  activeSelection,
  setActiveSelection,
  changeSelectedAddress,
}) {
  const { addresses } = useAddressContext();
  const { user } = useUserContext();
  const [phonenumber, setPhonenumber] = useState(addresses[0]?.phoneNumber);
  const [address, setAddress] = useState(addresses[0]?.address);
  const [addressNumber, setAddressNumber] = useState(
    addresses[0]?.addressNumber
  );
  const [showAddressList, setShowAddressList] = useState(false);
  // if (!address) return;

  useEffect(() => {
    if (addresses.length == 0) return;
    setPhonenumber(addresses[0].phoneNumber);
    setAddress(addresses[0].address);
    setAddressNumber(addresses[0].addressNumber);
  }, [addresses]);
  return (
    <div
      className={
        activeSelection === "addressInfo"
          ? "cart-address-info-container-active"
          : "cart-address-info-container"
      }
    >
      <h1>
        <div className="number">1</div>Select Address
      </h1>
      <div className="select-address-buttons">
        <div className="address-info-buttons">
          <button
            className="address-buttons"
            onClick={() => setShowAddressList(true)}
          >{`${address} ${addressNumber}`}</button>
          <input className="address-buttons" value={phonenumber} />
          <input className="address-buttons" value={"1st floor"} />
          <input className="address-buttons" value={user?.fullname} />
        </div>

        <div className="cart-address-info-flexCol">
          {
            <ul
              className={`cart-address-info-address-list ${
                !showAddressList ? "invisible" : "visible"
              }`}
            >
              {addresses.map((addr, index) => (
                <li>
                  <button
                    onClick={() => {
                      setAddress(addr.address);
                      setAddressNumber(addr.addressNumber);
                      changeSelectedAddress(index);
                    }}
                  >{`${addr.address} ${addr.addressNumber}`}</button>
                </li>
              ))}
            </ul>
          }
          <button
            className="next-step-button"
            onClick={() => {
              setActiveSelection("paymentInfo");
            }}
          >
            <ImArrowDown2 className="icon"></ImArrowDown2> Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartAddressInfo;
