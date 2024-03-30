import React from "react";
import "./card.css";

function Card(props) {
  return (
    <a href={props.url}>
      <div className="card">
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <img src={props.image} alt="" />
        </div>
        <div>
          <p>{props.des}</p>
        </div>
        <button onClick={props.onClick}>
          <p>Click me</p>
        </button>
      </div>
    </a>
  );
}

export default Card;
