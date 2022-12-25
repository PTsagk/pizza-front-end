import axios from "axios";
import * as React from "react";
import { Component } from "react";
import { useProductContext } from "../../Context/productsContext";
import { styles } from "../../statics/styles";
import { FormatMoney } from "../../utilities/Formatters";
import "./AdminLists.css";

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
      .then((res) => window.location.reload())
      .catch((e) => console.log(e));
  }
  return (
    <div className={`${styles.flexCol}`}>
      <div className="admin-list-heading">
        <h3>Pizzas</h3>
      </div>
      <div className="w-[100%] flex justify-end items-center py-5">
        <button
          className="text-white bg-[#ec1a37] text-[22px]
        font-bold px-5 py-2 rounded-[10px]"
          onClick={() => activateForm()}
        >
          Add+
        </button>
      </div>
      <ul className="admin-products-list">
        {pizzas?.map((pizza) => (
          <li>
            <img
              crossOrigin="anonymous"
              src={`${import.meta.env.VITE_API}/image/${pizza.image}`}
              alt={pizza.name}
              className="h-[100%] object-fit"
            />
            <div className="flex flex-col justify-evenly h-[100%] ml-3">
              <div className="text-[18px] font-semibold">{pizza.name}</div>
              <div className="w-[350px] ellipsis-text">{pizza.description}</div>
            </div>
            <div className="flex flex-col justify-evenly h-[100%] ml-3">
              <div>{pizza.category}</div>
              <div>{FormatMoney(pizza.price.toString())}</div>
            </div>
            <button
              className="admin-list-button"
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
