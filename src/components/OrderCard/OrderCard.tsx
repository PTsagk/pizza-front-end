import * as React from "react";
import { Component } from "react";
import "./OrderCard.css";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdOutlineAccountCircle,
  MdOutlineAttachMoney,
  MdOutlineDateRange,
} from "react-icons/md";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TbBrandPaypal, TbCreditCard, TbCashBanknote } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";
import margarita from "../../assets/hampizza.png";

interface IOrder {
  id: "";
  address: "";
  phone: "";
  username: "";
  total: "";
  payment: "";
  status: "";
  products: [];
  comments: "";
  createdAt: "";
}
function OrderCard({ status }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const statusColor = {
    completed: "success",
    active: "warning",
    pending: "primary",
  };
  return (
    <li
      className="flex flex-col"
      style={{
        borderBottom: "1px solid black",
      }}
    >
      <div
        className={`flex justify-evenly items-center w-[100%] h-[116px] bg-${statusColor[status]}`}
      >
        <button
          className="text-[22px] text-white button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <SlArrowRight />
        </button>
        <div className="flex items-center font-outfit text-[18px] text-white font-semibold">
          <p>Karaouli kai Dimitriou</p>
          <CiLocationOn className="ml-2 text-[22px]" />
        </div>
        <div className="flex items-center font-outfit text-[18px] text-white font-semibold">
          <p>69854323432</p>
          <IoCallOutline className="ml-2 text-[22px]" />
        </div>
        <div className="flex items-center font-outfit text-[18px] text-white font-semibold">
          <p>Joe Doe</p>
          <MdOutlineAccountCircle className="ml-2 text-[22px]" />
        </div>
        <div className="flex items-center font-outfit text-[18px] text-white font-semibold">
          <p>14.40 $</p>
        </div>
        <div className="flex items-center font-outfit text-[18px] text-white font-semibold">
          <div className="flex flex-col">
            <p>29-11-2020</p>
            <p>11:24 AM</p>
          </div>
          <MdOutlineDateRange className="ml-2 text-[22px]" />
        </div>
        <div className="flex items-center font-outfit text-[18px] text-white font-semibold">
          <TbBrandPaypal className="ml-2 text-[22px]" />
          <TbCreditCard className="ml-2 text-[22px]" />
          <TbCashBanknote className="ml-2 text-[22px]" />
        </div>
        <div className="flex items-center font-outfit text-[18px] text-white font-semibold">
          <p>Completed</p>
          <AiOutlineCheck className="ml-2 text-[22px]" />
        </div>
      </div>
      <div
        className={`w-[100%] h-[469px] bg-black flex justify-start p-2 ${
          !isOpen && "hidden"
        }`}
      >
        <ul className="p-0 w-[50%] h-[100%] order-items-list">
          <li className="flex bg-primary text-white font-outfit w-[550px] h-[123px] pr-5 mb-3">
            <img
              src={margarita}
              alt="pizza"
              className="h-[100%] object-fit
            bg-white"
            />
            <div className="flex flex-col h-[100%] justify-evenly ml-2">
              <div className="font-semibold text-[18px]">Pizza margarita</div>
              <div className="text-[16px]">
                100% Μοτσαρέλα, σάλτσα ντομάτας, πεπερόνι, ...
              </div>
            </div>
            <div className="flex flex-col justify-evenly">
              <div>2x</div>
              <div>28.80$</div>
            </div>
          </li>
        </ul>
        <div></div>
      </div>
    </li>
  );
}

export default OrderCard;
