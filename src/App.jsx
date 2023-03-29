import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RatingCard from "./Views/RatingCard/RatingCard";
import ThanksCard from "./Views/ThanksCard/ThanksCard";

function App() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center card-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RatingCard />} />
            <Route path="/thanks" element={<ThanksCard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div class="attribution text-light text-center mt-lg-5 mt-4 px-2">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/JonathanEKP"
          target="_blank"
        >
          Jonathan Larios
        </a>
        .
      </div>
    </div>
  );
}

export default App;
