import * as React from "react";
import { Component } from "react";
import MyVeggiesBG from "../../assets/MyVeggies.png";
import DummyProduct from "../../components/ProductCard/DummyProduct";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProductContext } from "../../Context/productsContext";
import { pizzaTypes } from "../../statics/texts";
import "./pizzas.css";

function Pizzas() {
  const { pizzas } = useProductContext();
  return (
    <div className="w-[100%] min-h-[100vh]  relative pizza-bg">
      <ul className="pt-[300px] flex flex-col items-center">
        {pizzaTypes.map((pizzaType, index) => (
          <li
            key={index}
            className="flex flex-col items-start
          w-[75%] mb-[100px]"
          >
            <h3
              className="category-header text-white text-[32px]
            font-bold rounded-[10px] px-[25px] underline"
            >
              {pizzaType}
            </h3>
            <ul className="flex">
              {pizzas
                ?.filter((pizza) => pizza.category == pizzaType)
                .map((pizza) => (
                  <ProductCard
                    key={pizza.id}
                    name={pizza.name}
                    // img={`${import.meta.env.VITE_API}/image/${pizza.image}`}
                    img={pizza.image}
                    description={pizza.description}
                    id={pizza.id}
                    price={pizza.price}
                    isPizza={true}
                  />
                ))}

              {/* If products are loading , show dummy results */}
              {pizzas.length == 0 &&
                new Array(6).fill(0).map((x) => <DummyProduct />)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizzas;
