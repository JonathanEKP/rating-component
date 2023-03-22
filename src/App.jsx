import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RatingCard from "./Views/RatingCard/RatingCard";
import ThanksCard from "./Views/ThanksCard/ThanksCard";

function App() {
  return (
    <div className="card-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RatingCard />} />
          <Route path="/thanks" element={<ThanksCard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
