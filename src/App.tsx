import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {import.meta.env.VITE_API}
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
