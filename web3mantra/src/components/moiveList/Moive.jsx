import React from "react";
import "./moive.css";
const Moive = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />
      <div className="container">
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Moive;
