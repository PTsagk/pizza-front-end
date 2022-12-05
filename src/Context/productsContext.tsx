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

interface IProductContext {
  ingredients: IIngredients[];
}

const ProductsContext = createContext({} as IProductContext);

export function useProductContext() {
  return useContext(ProductsContext);
}

function ProductProvider({ children }: IProductProvider) {
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/ingredients`)
      .then((res) => {
        console.log(res.data);
        setIngredients(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <ProductsContext.Provider value={{ ingredients }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
