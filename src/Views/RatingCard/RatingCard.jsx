import React, { useContext } from "react";
import Card from "../../Components/Card/Card";
import "./RatingCard.css";
import icon from "../../assets/icons/icon-star.svg";
import { RateContext } from "../../Context/RateContext";
import { useNavigate } from "react-router-dom";

function RatingCard() {
  const { rate, obtenerRate } = useContext(RateContext);
  const navigate = useNavigate();
  function handleSubmit() {
    if (rate != undefined) {
      navigate("/thanks");
    } else {
      alert("You must select one of the following options");
    }
  }

  return (
    <section className="rating-container">
      <Card>
        <div className="icon-container">
          <img src={icon} alt="Star icon" className="star-icon" />
        </div>
        <h3 className="text-light">How did we do?</h3>
        <p className="text-muted">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering
        </p>
        <div className="buttons-container d-flex justify-content-between">
          <button
            type="button"
            className="btn-rate shadow-sm"
            onClick={() => obtenerRate(1)}
            value="1"
          >
            1
          </button>
          <button
            type="button"
            className="btn-rate shadow-sm"
            onClick={() => obtenerRate(2)}
            value="2"
          >
            2
          </button>
          <button
            type="button"
            className="btn-rate shadow-sm"
            onClick={() => obtenerRate(3)}
            value="3"
          >
            3
          </button>
          <button
            type="button"
            className="btn-rate shadow-sm"
            onClick={() => obtenerRate(4)}
            value="4"
          >
            4
          </button>
          <button
            type="button"
            className="btn-rate shadow-sm"
            onClick={() => obtenerRate(5)}
            value="5"
          >
            5
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="mt-4 btn btn-submit text-uppercase w-100 rounded-5 p-2 fw-bold"
            onClick={handleSubmit}
          >
            S&nbsp;u&nbsp;b&nbsp;m&nbsp;i&nbsp;t
          </button>
        </div>
      </Card>
    </section>
  );
}

export default RatingCard;
