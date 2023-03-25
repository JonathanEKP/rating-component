import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card rounded-4">
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
