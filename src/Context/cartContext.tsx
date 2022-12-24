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
  removeItemFromCart: (_id: string) => void;
  subtractItemFromCart: (_id: string) => void;
}

interface ICartItem {
  id: string;
  name: string;
  price: number;
  img: string;
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

  function addItemToCart(item: ICartItem) {
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

  function removeItemFromCart(_id: string) {
    const tmp = new Map(cartItems);
    tmp.delete(_id);
    setCartItems(tmp);
  }

  function subtractItemFromCart(_id: string) {
    const tmp = new Map(cartItems);
    if (tmp.has(_id)) {
      const item = tmp.get(_id);
      if (item) {
        item.count -= 1;
        if (item.count == 0) {
          removeItemFromCart(item.id);
          return;
        } else {
          tmp.set(_id, item);
        }
        setCartItems(tmp);
      }
    }
  }

  useEffect(() => {
    const arr = Array.from(cartItems.values());
    console.log(arr);
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        subtractItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
