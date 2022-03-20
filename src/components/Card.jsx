import React from "react";
import "../styles/Cards.css";
const Card = (props) => {
  return (
    <div className={"card" + " " + props.bg}>
      <h1>{props.title}</h1>
      <hr />
      <span>{props.data}</span>
      {props.title.includes("%") && (
        <span>
          Los rangos de {props.title.slice(1)} corresponde al promedio de dicho
          categoría
        </span>
      )}

      {!props.title.includes("%") && (
        <span>
          Los rangos de {props.title} son una sumatoria de todos los usuarios
        </span>
      )}
    </div>
  );
};

export default Card;
