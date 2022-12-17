import * as React from "react";
import { Component } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProductContext } from "../../Context/productsContext";
function Drinks() {
  const { drinks } = useProductContext();
  return (
    <div className="w-[100%] min-h-[100vh]  relative pizza-bg">
      <div className="pt-[300px] w-[100%] flex justify-center">
        <ul className="w-[80%] justify-start products-page-list">
          {drinks.map((drink) => (
            <ProductCard
              key={drink.id}
              name={drink.name}
              // img={`${import.meta.env.VITE_API}/image/${drink.image}`}
              img={drink.image}
              desc={drink.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Drinks;
