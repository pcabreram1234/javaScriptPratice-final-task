import React from "react";
import { groupByProfesion } from "../utils/groupByProfesion";
import Card from "../components/Card";
import Profesions from "../json/profesions.json";
import { sumData, calcPercentage } from "../utils/calculate";

export const renderByProfesion = (usersInfo) => {
  Object.values(Profesions[0]).map((el) => {
    let group = groupByProfesion(el, usersInfo);
    return (
      <div key={Math.random() * 100}>
        <h2>{`${el}`}</h2>
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
        <Card title="Gastos" data={`RD$ ${sumData(group, 6)}`} bg="bg-orange" />
      </div>
    );
  });
};
