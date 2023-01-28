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
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
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
  isPizza: boolean;
}

const CartContext = createContext({} as ICartContext);

export function useCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }: ICartProvider) {
  const [isActive, setIsActive] = useState(false);
  const [cartItems, setCartItems] = useState<Map<string, ICartItem>>(
    new Map<string, ICartItem>()
  );
  const [fetchingLs, setFetchingLs] = useState(true);

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
    // setTimeout(() => {
    //   setIsActive(true);
    // }, 10);
    setIsActive(true);
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

  // Test for logging
  // useEffect(() => {
  //   if (fetchingLs) return;
  //   const arr = Array.from(cartItems.values());
  //   console.log(arr);
  //   const expiresInDate = Date.now() + 1000 * 60 * 60 * 2; // Time until cart expires => 2 hours
  //   localStorage.setItem("cart-items", JSON.stringify(arr));
  //   localStorage.setItem("cart-session", JSON.stringify(expiresInDate));
  // }, [cartItems]);

  useEffect(() => {
    let lsCartItems = localStorage.getItem("cart-items");
    if (lsCartItems) {
      const cartSession = localStorage.getItem("cart-session");
      if (cartSession && Number(JSON.parse(cartSession)) > Date.now()) {
        const expiresInDate = Date.now() + 1000 * 60 * 60 * 2; // Time until cart expires => 2 hours
        const parsedCartItems: ICartItem[] = JSON.parse(lsCartItems);
        const tmpMap = new Map();
        for (const index in parsedCartItems) {
          const item = parsedCartItems[index];
          tmpMap.set(item.id, item);
        }
        setCartItems(tmpMap);
      } else {
        localStorage.removeItem("cart-items");
        localStorage.removeItem("cart-session");
      }
    }
    setFetchingLs(false);
  }, []);

  // Checks if user clicked outside of cart
  function handleWindowClick(e: MouseEvent) {
    // Shows Error but works, don't change
    if (
      !e.composedPath().some((x) => x.id == "cart" || x.id == "product-card")
    ) {
      setIsActive(false);
    }
    // Doesn't work anymore, don't know why
    // if (!e.path.some((x) => x.id == "cart" || x.id == "product-card"))
    //   setIsActive(false);
  }

  useEffect(() => {
    window.addEventListener("click", (e) => handleWindowClick(e));
    return () => window.removeEventListener("click", handleWindowClick);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isActive,
        setIsActive,
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
