import React from "react";
import "../styles/Cards.css";
const Card = (props) => {
  return (
    <div className={"card" + " " + props.bg}>
      <h1>{props.title}</h1>
      <hr />
      <span>{props.data}</span>
    </div>
  );
};

export default Card;
