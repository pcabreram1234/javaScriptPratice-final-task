import React from "react";
import { groupByProfesion } from "../utils/groupByProfesion";
import Card from "./Card";
import Profesions from "../json/profesions.json";
import { sumData, calcPercentage } from "../utils/calculate";
import TitleResult from "./TitleResult";
import "../styles/ResultByProfesion.css";

const ResultByProfesion = (props) => {
  const renderBryProfesion = Object.values(Profesions[0]).map((el) => {
    let group = groupByProfesion(el, props.usersInfo);
    const category = [];
    group.length !== 0
      ? category.push(
          <div
            className="ResultByProfesion--container"
            key={Math.random() * 100}
          >
            <TitleResult title={`Resultados para ${el}`} />
            <Card
              title="Ingresos"
              data={`RD$ ${sumData(group, 2)}`}
              bg="bg-green"
            />
            <Card
              title="%SNS"
              data={`% ${calcPercentage(group, 4)}`}
              bg="bg-blue"
            />
            <Card
              title="% Jubilaciones"
              data={`% ${calcPercentage(group, 5)}`}
              bg="bg-purple"
            />
            <Card
              title="Gastos"
              data={`RD$ ${sumData(group, 6)}`}
              bg="bg-orange"
            />
          </div>
        )
      : null;

    return category;
  });

  return <div className="General--container">{renderBryProfesion}</div>;
};

export default ResultByProfesion;
