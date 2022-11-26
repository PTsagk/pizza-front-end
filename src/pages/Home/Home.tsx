import "./home.css";
import pizza from "../../assets/pizza3.png";
function Home() {
  return (
    <div className="h-[200vh] relative">
      <div className="home-bg h-[100vh] relative">
        {/* <div className="carousel-container absolute top-0">
          <img
            src={pizza}
            alt=""
            className="w-[80%] absolute top-[50%]"
            style={{ border: "1px solid white" }}
          />
        </div> */}
      </div>
      <div className="absolute w-[100%] h-[100%] top-0 left-0 flex flex-col">
        <div className="w-[100%] h-[40%]"></div>
        <div className="w-[100%] h-[20%]">
          <div className="carousel-container absolute top-0">
            <img src={pizza} alt="" className="w-[70%] absolute" />
          </div>
        </div>
        <div className="w-[100%] h-[40%]"></div>
      </div>
      <div className="red-body"></div>
    </div>
  );
}

export default Home;
