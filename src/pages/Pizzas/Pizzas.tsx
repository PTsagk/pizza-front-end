import * as React from "react";
import { Component } from "react";
import MyVeggiesBG from "../../assets/MyVeggies.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProductContext } from "../../Context/productsContext";
import { pizzaTypes } from "../../statics/texts";
import "./pizzas.css";

function Pizzas() {
  const { pizzas } = useProductContext();
  return (
    <div
      className="w-[100%] min-h-[100vh]  relative pizza-bg"
      style={
        {
          // backgroundImage: "url(https://imgur.com/a/AcnWfJN)",
        }
      }
    >
      {/* <img
        // src={MyVeggiesBG}
        src="https://i.imgur.com/Fr0roHM.png"
        alt=""
        className="absolute top-0 left-0 object-cover"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      /> */}
      <ul className="pt-[300px] flex flex-col items-center">
        {pizzaTypes.map((pizzaType) => (
          <li
            className="flex flex-col items-start
          w-[75%] mb-[100px]"
          >
            <h2
              className="bg-primary text-white text-[42px]
            font-bold rounded-[10px] px-5 underline"
            >
              {pizzaType}
            </h2>
            <ul className="flex">
              {pizzas
                ?.filter((pizza) => pizza.category == pizzaType)
                .map((pizza, index) => (
                  <ProductCard
                    key={pizza.id}
                    name={pizza.name}
                    // img={`${import.meta.env.VITE_API}/image/${pizza.image}`}
                    img={pizza.image}
                    desc={pizza.description}
                  />
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizzas;
