import axios from "axios";
import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";

interface IProductProvider {
  children: React.ReactNode;
}
interface IIngredients {
  id: string;
  ingredient: string;
}

interface IPizza {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  type: string;
}

interface IProductContext {
  ingredients: IIngredients[];
  pizzas: IPizza[];
  drinks: IProduct[];
  pizzaInfo: IProductInfo[];
  otherInfo: IProductInfo[];
}
interface IProductInfo {
  id: number;
  name: string;
}

const ProductsContext = createContext({} as IProductContext);

export function useProductContext() {
  return useContext(ProductsContext);
}

function ProductProvider({ children }: IProductProvider) {
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [drinks, setDrinks] = useState<IProduct[]>([]);
  const [pizzaInfo, setPizzaInfo] = useState<IProductInfo[]>([]);
  const [otherInfo, setOtherInfo] = useState<IProductInfo[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/ingredients`)
      .then((res) => {
        console.log(res.data);
        setIngredients(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/pizza`)
      .then((res) => setPizzas(res.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/product/Drink`)
      .then((res) => setDrinks(res.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_API}/product/type`, {
        type: "Pizza",
      })
      .then((resp) => setPizzaInfo(resp.data));
    axios
      .post(`${import.meta.env.VITE_API}/product/type`, {
        type: "Other",
      })
      .then((resp) => setOtherInfo(resp.data));
  }, []);
  return (
    <ProductsContext.Provider
      value={{ ingredients, pizzas, drinks, pizzaInfo, otherInfo }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
