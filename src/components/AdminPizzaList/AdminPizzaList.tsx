import * as React from "react";
import { Component } from "react";
import { styles } from "../../statics/styles";

const pizzaData = [
  {
    name: "Pizza Margarita",
    image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
    description: "100% Mozzarella, tomato sauce, pepperoni, bbq sauce, chicken",
    price: "14.45",
    category: "Vegan",
  },
];
function AdminPizzaList({ activateForm }) {
  return (
    <div className={`${styles.flexCol}`}>
      <div
        className="text-center text-[42px] text-white 
          bg-primary w-[100%] py-7 font-bold"
      >
        <h3>Pizzas</h3>
      </div>
      <div className="w-[100%] flex justify-end items-center py-5">
        <button
          className="text-white bg-primary text-[22px]
        font-bold px-5 py-2 rounded-[10px]"
          onClick={() => activateForm()}
        >
          Add+
        </button>
      </div>
      <ul className="flex flex-col py-3 ">
        {pizzaData.map((pizza) => (
          <li
            className="flex items-center justify-start 
            w-[1000px] h-[123px] bg-primary text-white"
          >
            <img
              src={pizza.image}
              alt={pizza.name}
              className="h-[100%] object-fit bg-white"
            />
            <div className="flex flex-col justify-evenly h-[100%] ml-3">
              <div className="text-[18px] font-semibold">{pizza.name}</div>
              <div className="w-[350px] ellipsis-text">{pizza.description}</div>
            </div>
            <div className="flex flex-col justify-evenly h-[100%] ml-3">
              <div>{pizza.category}</div>
              <div>{pizza.price}</div>
            </div>
            <button
              className="text-primary bg-white font-bold
              px-7 py-3 rounded-[10px] ml-7 hover:bg-black text-center text-[24px]"
            >
              Update
            </button>
            <button
              className="text-primary bg-white font-bold
              px-7 py-3 rounded-[10px] ml-7 hover:bg-black text-center text-[24px]"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPizzaList;
