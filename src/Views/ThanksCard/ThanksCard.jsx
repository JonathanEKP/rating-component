import React, { useContext } from "react";
import Card from "../../Components/Card/Card";
import "./ThanksCard.css";
import iconThanks from "../../assets/icons/illustration-thank-you.svg";
import { RateContext } from "../../Context/RateContext";
import { Link, useNavigate } from "react-router-dom";

function ThanksCard() {
  const { rate, setRate } = useContext(RateContext);
  const navigate = useNavigate()

  const handleReturn = ()=>{
    setRate()
    navigate("/rating-component/")
  }

  return (
    <section>
      <Card>
        <div className="thanks-icon-container d-flex justify-content-center mt-3">
          <img src={iconThanks} alt="Thanks icons container" />
        </div>
        <div className="d-flex justify-content-center mt-4 selected-container">
          <p className="selected rounded-5">You selected {rate} out of 5</p>
        </div>
        <div className="text-light mt-1 text-container">
          <h3 className="text-center">Thank You!</h3>
          <p className="text-muted text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
        <div className="d-flex justify-content-center">
        <button className="btn-back w-75 text-center rounded-4 p-1 fw-bold" onClick={()=>handleReturn()} >RETURN</button>

        </div>
      </Card>
        
    </section>
  );
}

export default ThanksCard;
