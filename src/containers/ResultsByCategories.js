import React from "react";
import TitleResult from "../components/TitleResult";
/* import "../styles/GeneralResult.css"; */
import { renderByProfesion } from "../utils/renderByProfesion";

const ResultsByCategories = (props) => {
  const renderByProf = renderByProfesion(props.usersInfo);
  console.log(renderByProf);
  return (
    <div className="General--container">
      <TitleResult title="Resultados por categoría" />
      {renderByProf}
    </div>
  );
};

export default ResultsByCategories;
