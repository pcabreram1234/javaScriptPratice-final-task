import React from "react";
import "../styles/TitleResult.css";
const TitleResult = (props) => {
  return (
    <div className="titleResult--container">
      <div className="Background">
        <h1 className="titleResult--container__h1">{props.title}</h1>
      </div>
    </div>
  );
};

export default TitleResult;
