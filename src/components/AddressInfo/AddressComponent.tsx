import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { useAddressContext } from "../../Context/addressContext";
import axios from "axios";

function AddressComponent({
  id,
  town,
  address,
  addressNumber,
  phoneNumber,
  setAddPanel,
  setTownInput,
  setAddressInput,
  setAddressNumberInput,
  setPhoneNumberInput,
  setIsUpdating,
  setUpdatingAddressId,
}) {
  //get the ability to refresh addresses
  const { setAddresses } = useAddressContext();

  //delete address
  async function deleteAddress() {
    axios.defaults.withCredentials = true;

    //I will mergre this so that will be in one API call
    const response = await axios.delete(`${import.meta.env.VITE_API}/address`, {
      data: {
        addressId: id,
      },
    });
    const { data } = await axios.get(`${import.meta.env.VITE_API}/address`);
    setAddresses(data);
  }

  //udpate address
  function updateAddress() {
    setAddPanel(true);
    setIsUpdating(true);
    setTownInput(town);
    setAddressInput(address);
    setAddressNumberInput(addressNumber);
    setPhoneNumberInput(phoneNumber);
    setUpdatingAddressId(id);
  }

  return (
    <div className="address">
      <div className="location-info">
        <HiLocationMarker className="location-icon"></HiLocationMarker>
        <h3>{address}</h3>
        <span>{addressNumber}</span>
      </div>
      <div className="contact-info">
        <BsFillTelephoneFill className="phone-icon"></BsFillTelephoneFill>
        {phoneNumber}
      </div>
      <div className="city-info">
        <FaCity className="city-icon"></FaCity>
        <h3>{town}</h3>
      </div>
      <div>
        <button onClick={() => updateAddress()}>Update</button>
        <button onClick={() => deleteAddress()}>Delete</button>
      </div>
    </div>
  );
}

export default AddressComponent;
