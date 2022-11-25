import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* {import.meta.env.VITE_API} */}
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
  );
}

export default App;
