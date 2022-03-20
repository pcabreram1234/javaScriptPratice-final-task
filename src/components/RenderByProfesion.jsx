import React from "react";
import { groupByProfesion } from "../utils/groupByProfesion";
import Card from "./Card";
import { sumData, calcPercentage } from "../utils/calculate";
import TitleResult from "./TitleResult";
import "../styles/ResultByProfesion.css";

const ResultByProfesion = (props) => {
  let category = [];

  function renderCards() {
    props.profesionList.slice(1).map((prof) => {
      let group = groupByProfesion(prof.name, props.usersInfo);
      group.length > 0 &&
        category.push(
          <div
            className="ResultByProfesion--container"
            key={Math.random() * 100}
          >
            <TitleResult title={`Categoría: ${prof.name}`} />
            <div className="CarsdDetail__container">
              <Card
                title="Ingresos"
                data={`RD$ ${sumData(group, "salary")}`}
                bg="bg-green"
              />
              <Card
                title="%SNS"
                data={`% ${calcPercentage(group, "medicare")}`}
                bg="bg-blue"
              />
              <Card
                title="% Jubilaciones"
                data={`% ${calcPercentage(group, "pensionFund")}`}
                bg="bg-purple"
              />
              <Card
                title="Gastos"
                data={`RD$ ${sumData(group, "AditionalExpenses")}`}
                bg="bg-orange"
              />
            </div>
          </div>
        );
      return category;
    });
  }

  renderCards();

  return <div className="General--container">{category}</div>;
};

export default ResultByProfesion;
