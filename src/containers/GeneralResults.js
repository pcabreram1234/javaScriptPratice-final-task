import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import TitleResult from "../components/TitleResult";

import "../styles/GeneralResult.css";
import { sumData, calcPercentage } from "../utils/calculate";

const GeneralResult = (props) => {
  const [sumState, setSum] = useState([]);
  const [medSum, setMedSum] = useState([]);
  const [pensSum, setPensSum] = useState([]);
  const [expenseSum, setExpenseSum] = useState([]);

  const usersInfo = props.usersInfo;
  let sum;

  useEffect(() => {
    if (usersInfo.length > 0) {
      sum = sumData(usersInfo, "salary");
      setMedSum(calcPercentage(usersInfo, "medicare"));
      setPensSum(calcPercentage(usersInfo, "pensionFund"));
      setExpenseSum(sumData(usersInfo, "AditionalExpenses"));
      setSum(sum);
    }
  }, [props.usersInfo]);

  return (
    <div className="General--container">
      <TitleResult title="Resultados Generales" />
      <div className="GeneralResult-Container">
        <Card title="Ingresos" data={`RD$ ${sumState}`} bg="bg-green" />
        <Card title="%SNS" data={`% ${medSum}`} bg="bg-blue" />
        <Card title="% Jubilaciones" data={`% ${pensSum}`} bg="bg-purple" />
        <Card title="Gastos" data={`RD$ ${expenseSum}`} bg="bg-orange" />
      </div>
    </div>
  );
};

export default GeneralResult;
