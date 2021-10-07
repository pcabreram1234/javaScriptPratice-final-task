import React from "react";
import Card from "../components/Card";
import TitleResult from "../components/TitleResult";
import "../styles/GeneralResult.css";
import { sumData, calcPercentage } from "../utils/calculate";
import ResultsByCategories from "./ResultsByCategories";

const GeneralResult = (props) => {
  const usersInfo = props.location.state.usersInfo;
  const sum = sumData(usersInfo, 2);
  return (
    <div className="General--container">
      <TitleResult title="Resultados Generales" />
      <div className="GeneralResult-Container">
        <Card title="Ingresos" data={`RD$ ${sum}`} bg="bg-green" />
        <Card
          title="%SNS"
          data={`% ${calcPercentage(usersInfo, 4)}`}
          bg="bg-blue"
        />
        <Card
          title="% Jubilaciones"
          data={`% ${calcPercentage(usersInfo, 5)}`}
          bg="bg-purple"
        />
        <Card
          title="Gastos"
          data={`RD$ ${sumData(usersInfo, 6)}`}
          bg="bg-orange"
        />
      </div>
      <ResultsByCategories usersInfo={usersInfo} />
    </div>
  );
};

export default GeneralResult;
