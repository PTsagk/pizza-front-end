import "./home.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { homeOffers, pizzaOffers } from "../../statics/texts";
import brocolliPizza from "../../assets/brocolliPizza.png";
import cumpizza from "../../assets/cumpizza.png";
import hampizza from "../../assets/hampizza.png";
import pizza3 from "../../assets/pizza3.png";
import pepperoni from "../../assets/pepperoni.png";

function Home() {
  const carouselStep = 100 / (pizzaOffers.length + 2);
  const containerWidth = (pizzaOffers.length + 2) * 100;
  const temp1 = (pizzaOffers.length - 1) / 2;
  const start =
    (pizzaOffers.length + 2) % 2 === 0
      ? temp1 * carouselStep
      : temp1 * carouselStep;

  const [position, setPosition] = useState(start);
  const [infoPosition, setInfoPosition] = useState(start);
  const [canClick, setCanClick] = useState(true);
  const [debounce, setDebounce] = useState(false);
  const [toStart, setToStart] = useState(false);

  function moveRight() {
    if (!canClick) return;
    if (position > -start) {
      let pos = position;
      let info = infoPosition;
      info -= carouselStep;
      pos -= carouselStep;
      setInfoPosition(info);
      setPosition(pos);
    } else {
      setPosition(start + carouselStep);
      setInfoPosition(start + carouselStep);
      setToStart(true);
      setDebounce(true);
    }
    setCanClick(false);
  }
  function moveLeft() {
    if (!canClick) return;
    if (position < start) {
      let pos = position;
      let info = infoPosition;
      pos += carouselStep;
      info += carouselStep;
      setPosition(pos);
      setInfoPosition(info);
    } else {
      setPosition(-start - carouselStep);
      setInfoPosition(-start - carouselStep);
      setDebounce(true);
    }
    setCanClick(false);
  }

  useEffect(() => {
    console.log(debounce);
    if (debounce) {
      setPosition(toStart ? start : -start);
      setInfoPosition(toStart ? start : -start);
      setToStart(false);
      setDebounce(false);
    }
  }, [debounce]);

  useEffect(() => {
    if (!canClick) {
      setTimeout(() => {
        setCanClick(true);
      }, 1400);
    }
  }, [canClick]);

  return (
    <div className="home-page">
      <div className="body home-bg">
        <div className="pizza-info">
          <button className="arrow left-arrow" onClick={() => moveLeft()}>
            <MdArrowBackIosNew></MdArrowBackIosNew>
          </button>
          <div className="info">
            <h2>Pizza Special</h2>
            <div
              className={`paras ${!debounce && "carousel-transition"}`}
              style={{
                transform: `translateX(${infoPosition}%)`,
                width: containerWidth + "%",
              }}
            >
              <p>{pizzaOffers[pizzaOffers.length - 1].desc}</p>
              {/* all descriptions */}
              {pizzaOffers.map((offer) => {
                return <p>{offer.desc}</p>;
              })}
              <p>{pizzaOffers[0].desc}</p>;
            </div>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <button className="arrow right-arrow" onClick={() => moveRight()}>
            <MdArrowForwardIos></MdArrowForwardIos>
          </button>
        </div>
      </div>

      <div
        className={`pizza-carousel ${!debounce && "carousel-transition"}`}
        style={{
          transform: `translateX(${position}%)`,
          width: containerWidth + "%",
        }}
      >
        {/* all images */}
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={pepperoni} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={brocolliPizza} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={hampizza} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={pizza3} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={cumpizza} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={pepperoni} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={brocolliPizza} alt="pizza" className="w-[80%]" />
        </div>
      </div>
      <div className="body red-body relative">
        <div
          className="w-[100%] h-[50%] absolute top-[50%]
        flex justify-evenly  items-center lg:flex-row flex-col"
        >
          {homeOffers.map((offer) => (
            <div className="flex flex-col items-start text-white">
              <div
                className="flex justify-start items-center
              xxl:text-[54px] font-bold text-[42px]"
              >
                <h3>{offer.header}</h3>
                <span className="ml-2">{offer.headerIcon}</span>
              </div>
              <div className="xxl:text-[32px] text-[22px] font-semibold mt-10 mb-5">
                {offer.timeRange}
              </div>
              <div className="xxl:text-[24px] text-[18px] font-normal">
                {offer.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
