import "./home.css";
import pizza from "../../assets/pizza3.png";
import margarita from "../../assets/hampizza.png";
import pepperoni from "../../assets/pepperoni.png";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { homeOffers, pizzaOffers } from "../../statics/texts";
function Home() {
  const [position, setPosition] = useState(20);
  const [infoPosition, setInfoPosition] = useState(20);
  const [canClick, setCanClick] = useState(true);
  const [debounce, setDebounce] = useState(false);
  const [toStart, setToStart] = useState(false);

  function moveRight() {
    if (!canClick) return;
    console.log(position);
    if (position > -20) {
      let pos = position;
      let info = infoPosition;
      info -= 20;
      pos -= 20;
      setInfoPosition(info);
      setPosition(pos);
    } else {
      setDebounce(true);
      setPosition(40);
      setInfoPosition(40);
      setToStart(true);
    }
    setCanClick(false);
  }
  function moveLeft() {
    if (!canClick) return;
    if (position < 20) {
      let pos = position;
      let info = infoPosition;
      pos += 20;
      info += 20;
      setPosition(pos);
      setInfoPosition(info);
    } else {
      setDebounce(true);
      setPosition(-40);
      setInfoPosition(-40);
    }
    setCanClick(false);
  }

  useEffect(() => {
    if (debounce) {
      setDebounce(false);
      setPosition(toStart ? 20 : -20);
      setInfoPosition(toStart ? 20 : -20);
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
          <div className="info">
            <h2>Pizza Special</h2>
            <div
              className={`paras ${!debounce && "carousel-transition"}`}
              style={{ transform: `translateX(${infoPosition}%)` }}
            >
              <p>
                Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
              </p>
              <p>
                Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
              </p>
              <p>
                Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
              </p>
              <p>
                Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
              </p>
              <p>
                Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
              </p>
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
        style={{ transform: `translateX(${position}%)` }}
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

// import "./home.css";
// import pizza from "../../assets/pizza3.png";
// import margarita from "../../assets/hampizza.png";
// import pepperoni from "../../assets/pepperoni.png";
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// import { useEffect, useState } from "react";
// import { homeOffers, pizzaOffers } from "../../statics/texts";
// function Home() {
//   const [position, setPosition] = useState(33.33);
//   const [infoPosition, setInfoPosition] = useState(40);
//   const [canClick, setCanClick] = useState(true);
//   const [debounce, setDebounce] = useState(false);
//   const [toStart, setToStart] = useState(false);
//   const [toEnd, setToEnd] = useState(false);

//   function moveRight() {
//     if (!canClick) return;

//     if (position > -33.33) {
//       let pos = position;
//       let info = infoPosition;
//       info -= 40;
//       pos -= 33.33;
//       setInfoPosition(info);
//       setPosition(pos);
//       setCanClick(false);
//     } else {
//       setPosition(0);
//       setToStart(true);
//       setDebounce(true);
//     }
//   }
//   function moveLeft() {
//     if (!canClick) return;
//     if (position < 33.33) {
//       let pos = position;
//       let info = infoPosition;
//       pos += 33.33;
//       info += 40;
//       setPosition(pos);
//       setInfoPosition(info);
//       setCanClick(false);
//     } else {
//       setPosition(33.33);
//       setToEnd(true);
//       setDebounce(true);
//     }
//   }

//   useEffect(() => {
//     if (debounce) {
//       setPosition(toStart ? 33.33 : -33.33);
//       setToEnd(false);
//       setToStart(false);

//       setTimeout(() => {
//         setDebounce(false);
//       }, 1400);
//     }
//   }, [debounce]);

//   useEffect(() => {
//     console.log("click");
//     if (!canClick) {
//       setTimeout(() => {
//         setCanClick(true);
//       }, 1400);
//     }
//   }, [canClick]);

//   return (
//     <div className="home-page">
//       <div className="body home-bg">
//         <div className="pizza-info">
//           <button className="arrow left-arrow" onClick={() => moveLeft()}>
//             <MdArrowBackIosNew></MdArrowBackIosNew>
//           </button>
//           <div className="info">
//             <h2>Pizza Special</h2>
//             <div
//               className="paras carousel-transition"
//               style={{ transform: `translateX(${infoPosition}%)` }}
//             >
//               <p>
//                 Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
//               </p>
//               <p>
//                 Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
//               </p>
//               <p>
//                 Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
//               </p>
//               <p>
//                 Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
//               </p>
//               <p>
//                 Tomato sauce, Gouda, Peperoni, Bacon, Green pepper, Mushrooms
//               </p>
//             </div>
//             <button className="add-to-cart">Add to cart</button>
//           </div>
//           <button className="arrow right-arrow" onClick={() => moveRight()}>
//             <MdArrowForwardIos></MdArrowForwardIos>
//           </button>
//         </div>
//       </div>

//       <div
//         className={"pizza-carousel carousel-transition"}
//         style={{ transform: "translateX(" + position + "%" + ")" }}
//       >
//         <div className="pizza-1-container w-[100vw] flex justify-center">
//           <img src={pepperoni} alt="pizza" className="w-[80%]" />
//         </div>
//         <div className="pizza-1-container w-[100vw] flex justify-center">
//           <img src={margarita} alt="pizza" className="w-[80%]" />
//         </div>
//         <div className="pizza-1-container w-[100vw] flex justify-center">
//           <img src={pizza} alt="pizza" className="w-[80%]" />
//         </div>
//         {/* <div className="pizza-2-container w-[100vw] flex justify-center">
//           <img src={pepperoni} alt="pizza" className="w-[80%]" />
//         </div>
//         <div className="pizza-3-container w-[100vw] flex justify-center">
//           <img src={margarita} alt="pizza" className="w-[80%]" />
//         </div> */}
//       </div>
//       <div className="body red-body relative">
//         <div
//           className="w-[100%] h-[50%] absolute top-[50%]
//         flex justify-evenly  items-center lg:flex-row flex-col"
//         >
//           {homeOffers.map((offer) => (
//             <div className="flex flex-col items-start text-white">
//               <div
//                 className="flex justify-start items-center
//               xxl:text-[54px] font-bold text-[42px]"
//               >
//                 <h3>{offer.header}</h3>
//                 <span className="ml-2">{offer.headerIcon}</span>
//               </div>
//               <div className="xxl:text-[32px] text-[22px] font-semibold mt-10 mb-5">
//                 {offer.timeRange}
//               </div>
//               <div className="xxl:text-[24px] text-[18px] font-normal">
//                 {offer.description}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
