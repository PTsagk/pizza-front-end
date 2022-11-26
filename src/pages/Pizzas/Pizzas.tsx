import * as React from "react";
import { Component } from "react";
import MyVeggiesBG from "../../assets/MyVeggies.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./pizzas.css";

const DATA = [
  {
    category: "Vegeterian",
    pizzas: [
      {
        name: "Veggie",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `
Mozzarella, tomato sauce,
         pepperoni, spicy beef, fresh mushrooms.
         In thin dough, with a diameter of 41 cm and cut
         into 6 large pieces that you fold in half`,
      },
      {
        name: "Margarita",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `
Mozzarella, tomato sauce,
         pepperoni, spicy beef, fresh mushrooms.
         In thin dough, with a diameter of 41 cm and cut
         into 6 large pieces that you fold in half`,
      },
      {
        name: "Ham and Bacon",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `
Mozzarella, tomato sauce,
         pepperoni, spicy beef, fresh mushrooms.
         In thin dough, with a diameter of 41 cm and cut
         into 6 large pieces that you fold in half`,
      },
    ],
  },
  {
    category: "Meat Lover's",
    pizzas: [
      {
        name: "Veggie",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `
Mozzarella, tomato sauce,
         pepperoni, spicy beef, fresh mushrooms.
         In thin dough, with a diameter of 41 cm and cut
         into 6 large pieces that you fold in half`,
      },
      {
        name: "Ham",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `
Mozzarella, tomato sauce,
         pepperoni, spicy beef, fresh mushrooms.
         In thin dough, with a diameter of 41 cm and cut
         into 6 large pieces that you fold in half`,
      },
      {
        name: "Pepperoni",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `
Mozzarella, tomato sauce,
         pepperoni, spicy beef, fresh mushrooms.
         In thin dough, with a diameter of 41 cm and cut
         into 6 large pieces that you fold in half`,
      },
    ],
  },
  {},
];
function Pizzas() {
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
        {DATA.map((pizzaCategory) => (
          <li
            className="flex flex-col items-start
          w-[75%] mb-[100px]"
          >
            <h2
              className="bg-primary text-white text-[42px]
            font-bold rounded-[10px] px-5 underline"
            >
              {pizzaCategory.category}
            </h2>
            <ul className="flex">
              {pizzaCategory.pizzas?.map((pizza, index) => (
                <ProductCard
                  key={index}
                  name={pizza.name}
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
