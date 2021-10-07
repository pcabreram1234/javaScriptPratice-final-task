import React from "react";
import "../styles/CalcButton.css";
import calcIcon from "../assets/images/Calculator.png";

const CalcButton = (props, { setRefinput }) => {
  return (
    <button
      className="calcButton"
      onClick={(e) => {
        props.usersInfo.length < 2
          ? (alert("Favor de introducir por lo menos dos personas"),
            e.preventDefault(),
            props.refInput.current !== null
              ? props.refInput.current.focus()
              : null)
          : 0;
      }}
    >
      <img src={calcIcon} alt="" />
      Calcular
    </button>
  );
};

export default CalcButton;
