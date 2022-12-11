import axios from "axios";
import * as React from "react";
import { Component } from "react";
import { useProductContext } from "../../../Context/productsContext";
import { styles } from "../../../statics/styles";
import { FormatMoney } from "../../../utilities/Formatters";

function AdminPizzaList({ activateForm }) {
  const { pizzas } = useProductContext();

  function handleDelete(id: string, image: string) {
    axios
      .delete(`${import.meta.env.VITE_API}/pizza`, {
        data: {
          id,
          image,
        },
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  }
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
        {pizzas?.map((pizza) => (
          <li
            className="flex items-center justify-evenly 
            w-[1000px] h-[123px] bg-primary text-white my-2"
          >
            <img
              crossOrigin="anonymous"
              src={`${import.meta.env.VITE_API}/image/${pizza.image}`}
              alt={pizza.name}
              className="h-[100%] object-fit bg-primary"
            />
            <div className="flex flex-col justify-evenly h-[100%] ml-3">
              <div className="text-[18px] font-semibold">{pizza.name}</div>
              <div className="w-[350px] ellipsis-text">{pizza.description}</div>
            </div>
            <div className="flex flex-col justify-evenly h-[100%] ml-3">
              <div>{pizza.category}</div>
              <div>{FormatMoney(pizza.price.toString())}</div>
            </div>
            {/* <button
              className="text-primary bg-white font-bold
              px-7 py-3 rounded-[10px] ml-7 hover:bg-black text-center text-[24px]"
            >
              Update
            </button> */}
            <button
              className="text-primary bg-white font-bold
              px-7 py-3 rounded-[10px] ml-7 hover:bg-black text-center text-[24px]"
              onClick={() => handleDelete(pizza.id, pizza.image)}
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
