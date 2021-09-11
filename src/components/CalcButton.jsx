import React from "react";
import "../styles/CalcButton.css";
import calcIcon from "../assets/images/Calculator.png";

const CalcButton = () => {
  return (
    <button className="calcButton">
      <img src={calcIcon} alt="" />
      Calcular
    </button>
  );
};

export default CalcButton;
