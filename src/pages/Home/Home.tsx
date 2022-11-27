import "./Home.css";
import pizza from "../../assets/pizza3.png";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
function Home() {
  const [position, setPosition] = useState(0);
  function moveRight() {
    if (position > -200) {
      let pos = position;
      pos -= 100;
      setPosition(pos);
    }
  }
  function moveLeft() {
    if (position < 0) {
      let pos = position;
      pos += 100;
      setPosition(pos);
    }
  }

  return (
    <div className="home-page">
      <div className="body home-bg">
        <div className="pizza-info">
          <button onClick={() => moveLeft()}>
            <MdArrowBackIosNew className="arrow"></MdArrowBackIosNew>
          </button>
          <div className="flex flex-col">
            <h2>Pizza Special</h2>
            <p>Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms</p>
          </div>
          <button onClick={() => moveRight()}>
            <MdArrowForwardIos className="arrow"></MdArrowForwardIos>
          </button>
        </div>
      </div>

      <div className={`pizza-carousel left-[${position}%]`}>
        <div className="pizza-1-container w-[100vw] flex justify-center">
          <img src={pizza} alt="" className="w-[90%]" />
        </div>
        <div className="pizza-2-container w-[100vw] flex justify-center">
          <img src={pizza} alt="" className="w-[90%]" />
        </div>
        <div className="pizza-3-container w-[100vw] flex justify-center">
          <img src={pizza} alt="" className="w-[90%]" />
        </div>
      </div>
      <div className="body red-body"></div>
    </div>
  );
}

export default Home;
