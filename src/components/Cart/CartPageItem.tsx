import * as React from "react";
import { Component } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FormatMoney } from "../../utilities/Formatters";
import { BiMinus, BiPlus } from "react-icons/bi";
import "./CartPageItem.css";
import { useCartContext } from "../../Context/cartContext";

interface ICartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  description: string;
  count: number;
}

interface ICartPageItemProps {
  item: ICartItem;
}

function CartPageItem({ item }: ICartPageItemProps) {
  const [canClick, setCanClick] = React.useState(true);
  const { removeItemFromCart, addItemToCart, subtractItemFromCart } =
    useCartContext();

  React.useEffect(() => {
    if (!canClick) {
      setTimeout(() => {
        setCanClick(true);
      }, 800);
    }
  }, [canClick]);

  function handleCountModify(fn) {
    if (!canClick) return;

    fn();
    setCanClick(false);
  }

  return (
    <li className="">
      <img
        crossOrigin="anonymous"
        src={`${import.meta.env.VITE_API}/image/${item.img}`}
        alt={item.name}
      />
      <div className="flex flex-col w-[100%] h-[100%] justify-between p-[5px]">
        <div className="flex items-center justify-between w-[100%]">
          <div className="font-semibold text-[18px] text-black">
            {item.name}
          </div>
          <button
            type="button"
            className="text-[26px]"
            onClick={() => {
              handleCountModify(() => removeItemFromCart(item.id));
            }}
          >
            <MdDeleteForever />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="max-w-[200px] text-black">
            {item.description.length > 50
              ? item.description.slice(0, 45) + "..."
              : item.description}
          </p>
          <div className="flex w-[175px] justify-between">
            <div className="flex">
              <button
                type="button"
                className="cart-page-count-button"
                onClick={() => {
                  handleCountModify(() => subtractItemFromCart(item.id));
                }}
              >
                <BiMinus />
              </button>
              <div className="cart-page-count ml-[5px]">{item.count}</div>
              <button
                type="button"
                className="cart-page-count-button ml-[5px]"
                onClick={() => {
                  handleCountModify(() => addItemToCart(item));
                }}
              >
                <BiPlus />
              </button>
            </div>
            <div className="text-black font-regular">
              {FormatMoney(item.price * item.count)}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartPageItem;
