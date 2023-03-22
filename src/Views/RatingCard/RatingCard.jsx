import React from "react";
import Card from "../../Components/Card/Card";
import "./RatingCard.css";

function RatingCard() {
  return (
    <div>
      <Card>
        <button className="btn btn-primary">Click</button>
        <h1 className="text-light">Rate us</h1>
      </Card>
    </div>
  );
}

export default RatingCard;
