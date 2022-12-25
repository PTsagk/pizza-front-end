import axios from "axios";
import * as React from "react";
import { Component } from "react";
import { useProductContext } from "../../Context/productsContext";
import { styles } from "../../statics/styles";
import { FormatMoney } from "../../utilities/Formatters";
import "./AdminLists.css";

function AdminDrinksList({ activateForm }) {
  const { drinks } = useProductContext();

  function handleDelete(id: string, image: string) {
    axios
      .delete(`${import.meta.env.VITE_API}/product`, {
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
        <h3>Drinks</h3>
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
        {drinks?.map((drink) => (
          <li>
            <img
              crossOrigin="anonymous"
              src={`${import.meta.env.VITE_API}/image/${drink.image}`}
              alt={drink.name}
              className="h-[100%] object-fit"
            />
            <div className="flex flex-col justify-evenly h-[100%] ml-3">
              <div className="text-[18px] font-semibold">{drink.name}</div>
              <div className="w-[350px] ellipsis-text">{drink.description}</div>
            </div>
            <div className="flex flex-col justify-center h-[100%] ml-3">
              <div>{FormatMoney(drink.price.toString())}</div>
            </div>
            <button
              className="admin-list-button"
              onClick={() => handleDelete(drink.id, drink.image)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDrinksList;
