import axios from "axios";
import * as React from "react";
import {
  Component,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

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
}

const ProductsContext = createContext({} as IProductContext);

export function useProductContext() {
  return useContext(ProductsContext);
}

function ProductProvider({ children }: IProductProvider) {
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [drinks, setDrinks] = useState<IProduct[]>([]);

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
  return (
    <ProductsContext.Provider value={{ ingredients, pizzas, drinks }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
