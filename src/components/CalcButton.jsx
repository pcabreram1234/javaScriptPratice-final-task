import React, { useEffect } from "react";
import "../styles/CalcButton.css";
import calcIcon from "../assets/images/Calculator.png";
import "../styles/CalcButton.css";

const CalcButton = () => {
  return (
    <button className="calcButton">
      <img src={calcIcon} alt="" />
      Calcular
    </button>
  );
};

export default CalcButton;
