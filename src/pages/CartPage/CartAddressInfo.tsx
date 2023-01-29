import React, { useState, useEffect } from "react";
import { ImArrowDown2 } from "react-icons/all";
import { useAddressContext } from "../../Context/addressContext";
import { useUserContext } from "../../Context/userContext";

interface IFormInfo {
  bellname: string;
  floor: string;
}
interface IAddress {
  address: string;
  addressNumber: string;
  city: string;
  id: string;
  phoneNumber: string;
  user_id: string;
}

interface ICartAddressInfo {
  activeSelection: string;
  setActiveSelection: (str) => void;
  changeSelectedAddress: (index) => void;
  formInfo: IFormInfo;
  changeAddressFormInfo: (obj) => void;
  selectedAddress: IAddress | null;
}

function CartAddressInfo({
  activeSelection,
  setActiveSelection,
  changeSelectedAddress,
  formInfo,
  changeAddressFormInfo,
  selectedAddress,
}: ICartAddressInfo) {
  const { addresses } = useAddressContext();
  const { user } = useUserContext();
  const [showAddressList, setShowAddressList] = useState(false);

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
            type="button"
            className="address-buttons"
            onClick={() => setShowAddressList(true)}
          >{`${selectedAddress?.address} ${selectedAddress?.addressNumber}`}</button>
          <div className="address-buttons">{selectedAddress?.phoneNumber}</div>

          <input
            className="address-buttons"
            value={formInfo.floor}
            name="floor"
          />
          <input
            className="address-buttons"
            value={formInfo.bellname}
            name="bellname"
          />
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
                    type="button"
                    onClick={() => {
                      changeAddressFormInfo(
                        Object.assign(
                          formInfo,
                          { address: addr.address },
                          { addressNumber: addr.addressNumber }
                        )
                      );
                      changeSelectedAddress(index);
                    }}
                  >{`${addr.address} ${addr.addressNumber}`}</button>
                </li>
              ))}
            </ul>
          }
          <button
            type="button"
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
