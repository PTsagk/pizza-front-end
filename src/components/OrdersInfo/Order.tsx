import { useProductContext } from "../../Context/productsContext";
import { MdLocationPin, MdApartment, MdCreditCard } from "react-icons/md";
import { BsCashStack, BsPaypal } from "react-icons/bs";

function Order({ data }) {
  const { pizzaInfo, otherInfo } = useProductContext();

  return (
    <div className="order">
      <div className="order-info">
        <MdLocationPin></MdLocationPin>
        {data[0].address}
      </div>
      <div className="order-info">
        <span>{data[0].addressNumber}</span>
      </div>
      <div className="order-info">
        <MdApartment className="icon"></MdApartment>floor: {data[0].floor}
      </div>
      <div className="order-info">
        {data[0].payment === "cash" && (
          <BsCashStack className="icon"></BsCashStack>
        )}
        {data[0].payment === "paypal" && <BsPaypal className="icon"></BsPaypal>}
        {data[0].payment === "credit" && (
          <MdCreditCard className="icon"></MdCreditCard>
        )}
        {data[0].payment}
      </div>
      <div className="order-products">
        {data.map((item) => {
          let temp;
          if (item.product_type === "Pizza") {
            temp = pizzaInfo.find((pizza) => pizza.id === item.product_id);
            console.log(temp);
          } else {
            temp = otherInfo.find((other) => other.id === item.product_id);
            console.log(temp);
          }
          return (
            <div>
              <span>{item.count}x</span>
              {temp.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;
