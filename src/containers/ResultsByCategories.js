import React from "react";
import "../styles/ResultByProfesion.css";
import ResultByProfesion from "../components/RenderByProfesion";

const ResultsByCategories = (props) => {
  return (
    <div className="General--container">
      <ResultByProfesion usersInfo={props.usersInfo} />
    </div>
  );
};

export default ResultsByCategories;
