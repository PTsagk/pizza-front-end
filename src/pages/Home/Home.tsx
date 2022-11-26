import BG from "../../assets/veggiesBG.jpg";
import pizza from "../../assets/pizza3.png";
import "./Home.css";
function Home() {
  return (
    <div className="w-[100%] homepage">
      <img
        src={BG}
        alt=""
        className="absolute top-0 left-0 w-[100%] h-[100%]"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="body pizza-body">
        <div
          className="carousel-controls w-[100%] h-[100%]"
          style={{ border: "1px solid white" }}
        ></div>
        <div className="pizza-carousel absolute w-[100%] h-[100%] top-0 right-[0%]">
          <img src={pizza} alt="" className="absolute top-[25%]" />
          <img src={pizza} alt="" className="absolute top-[25%] left-[100%]" />
          <img src={pizza} alt="" className="absolute top-[25%] left-[200%]" />
        </div>
      </div>
      <div className="body red-body"></div>
    </div>
  );
}

export default Home;
