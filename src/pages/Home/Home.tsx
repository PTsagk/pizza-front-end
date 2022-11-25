import * as React from "react";
import { Component } from "react";
function Home() {
  return (
    <div
      className="w-[100vw] h-[100vh]"
      style={{
        backgroundImage:
          "url(https://media.discordapp.net/attachments/908061505956757527/1045435685533929492/Welcome_-_Raw_Food_Chef.jpg?width=1025&height=683)",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    ></div>
  );
}

export default Home;
