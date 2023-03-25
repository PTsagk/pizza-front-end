import "./home.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { homeOffers, pizzaOffers } from "../../statics/texts";
import brocolliPizza from "../../assets/brocolliPizza.png";
import cumpizza from "../../assets/cumpizza.png";
import hampizza from "../../assets/hampizza.png";
import pizza3 from "../../assets/pizza3.png";
import pepperoni from "../../assets/pepperoni.png";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const pizzaRef = useRef(null);
  const infoRef = useRef(null);
  const carouselStep = 100 / (pizzaOffers.length + 2);
  const containerWidth = (pizzaOffers.length + 2) * 100;
  const temp1 = (pizzaOffers.length - 1) / 2;
  const start = temp1 * carouselStep;

  const [position, setPosition] = useState(start);
  const [infoPosition, setInfoPosition] = useState(start);
  const [canClick, setCanClick] = useState(true);
  const [debounce, setDebounce] = useState(false);
  const [toStart, setToStart] = useState(false);

  function moveRight() {
    if (!canClick) return;
    pizzaRef.current.next();
    infoRef.current.next();

    setCanClick(false);
  }
  function moveLeft() {
    if (!canClick) return;
    pizzaRef.current.prev();
    infoRef.current.prev();

    setCanClick(false);
  }

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
          <button className="arrow left-arrow " onClick={() => moveLeft()}>
            <MdArrowBackIosNew></MdArrowBackIosNew>
          </button>
          <div className="info">
            <h2>Pizza Offers</h2>
            <Carousel
              ref={infoRef}
              interval={null}
              controls={false}
              indicators={false}
              className={"info-paras"}
            >
              {pizzaOffers.map((offer) => {
                return (
                  <Carousel.Item>
                    <p className="offer-desc">{offer.desc}</p>
                  </Carousel.Item>
                );
              })}
            </Carousel>

            <button className="add-to-cart">Add to cart</button>
          </div>
          <button className="arrow right-arrow" onClick={() => moveRight()}>
            <MdArrowForwardIos></MdArrowForwardIos>
          </button>
        </div>
      </div>
      <Carousel
        className="absolute"
        interval={null}
        ref={pizzaRef}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <div className="pizza-1-container w-[100%] flex justify-center pizza-container">
            <img src={brocolliPizza} alt="pizza" className="w-[80%]" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="pizza-1-container w-[100%] flex justify-center pizza-container">
            <img src={hampizza} alt="pizza" className="w-[80%]" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="pizza-1-container w-[100%] flex justify-center pizza-container">
            <img src={pizza3} alt="pizza" className="w-[80%]" />
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="body offers">
      
          {homeOffers.map((offer) => (
            <div className="offer">
              <div
                className="offer-header"
              >
                <h3>{offer.header}</h3>
                <span className="">{offer.headerIcon}</span>
              </div>
              <div className="offer-timerange">
                {offer.timeRange}
              </div>
              <div className="offer-description">
                {offer.description}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
