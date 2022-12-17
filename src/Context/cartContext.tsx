import axios from "axios";
import * as React from "react";
import {
  Component,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface ICartProvider {
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

interface ICartContext {
  cartItems: Map<string, ICartItem>;
  addItemToCart: (item) => void;
  removeItemFromCart: (item) => void;
}

interface ICartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  count: number;
}

const CartContext = createContext({} as ICartContext);

export function useCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }: ICartProvider) {
  const [cartItems, setCartItems] = useState<Map<string, ICartItem>>(
    new Map<string, ICartItem>()
  );

  function addItemToCart(item: IProduct | IPizza) {
    const tmp = new Map(cartItems);
    const { id } = item;
    if (tmp.has(id)) {
      let count = tmp.get(id)?.count;
      if (!count) return;
      count++;
      tmp.set(id, { ...item, count });
    } else tmp.set(id, { ...item, count: 1 });
    setCartItems(tmp);
  }

  function removeItemFromCart(item: IProduct | IProduct) {
    const tmp = new Map(cartItems);
    tmp.delete(item.id);
    setCartItems(tmp);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
