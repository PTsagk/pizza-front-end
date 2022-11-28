import "./home.css";
import pizza from "../../assets/pizza3.png";
import margarita from "../../assets/hampizza.png";
import pepperoni from "../../assets/pepperoni.png";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { homeOffers } from "../../statics/texts";
function Home() {
  const [position, setPosition] = useState(-100);
  const [canClick, setCanClick] = useState(true);
  const [debounce, setDebounce] = useState(false);
  const [toStart, setToStart] = useState(false);
  const [toEnd, setToEnd] = useState(false);

  function moveRight() {
    if (!canClick) return;
    if (position > -300) {
      let pos = position;
      pos -= 100;
      setPosition(pos);
    } else {
      setPosition(0);
      setToStart(true);
      setDebounce(true);
    }
    setCanClick(false);
  }
  function moveLeft() {
    if (!canClick) return;
    if (position < 0) {
      let pos = position;
      pos += 100;
      setPosition(pos);
    } else {
      setPosition(-300);
      setToEnd(true);
      setDebounce(true);
    }
    setCanClick(false);
  }

  useEffect(() => {
    if (debounce) {
      setDebounce(false);
      setPosition(toStart ? -100 : -200);
      setToEnd(false);
      setToStart(false);
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
          <div className="flex flex-col items-center">
            <h2>Pizza Special</h2>
            <p>Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <button className="arrow right-arrow" onClick={() => moveRight()}>
            <MdArrowForwardIos></MdArrowForwardIos>
          </button>
        </div>
      </div>

      <div
        className={`pizza-carousel ${!debounce && "carousel-transition"}`}
        style={{ left: position + "%" }}
      >
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={pepperoni} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={margarita} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={pizza} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-2-container w-[100vw] flex justify-center">
          <img src={pepperoni} alt="pizza" className="w-[80%]" />
        </div>
        <div className="pizza-3-container w-[100vw] flex justify-center">
          <img src={margarita} alt="pizza" className="w-[80%]" />
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
