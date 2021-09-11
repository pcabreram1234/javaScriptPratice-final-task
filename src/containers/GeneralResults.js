import React from "react";
import Card from "../components/Card";
import "../styles/GeneralResult.css";
const GeneralResult = () => {
  return (
    <div className="GeneralResult-Container">
      <Card title="Ingresos" data="RD$ 25,0000" bg="bg-green" />
      <Card title="%SNS" data="40%" bg="bg-blue" />
      <Card title="% Jubilaciones" data="10%" bg="bg-purple" />
      <Card title="Gastos" data="RD$ 5,000" bg="bg-orange" />
    </div>
  );
};

export default GeneralResult;
