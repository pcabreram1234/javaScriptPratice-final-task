import React from "react";
import TittleBackground from "../assets/images/TittleBackground.png";
import "../styles/TitleResult.css";
const TitleResult = (props) => {
  return (
    <div className="titleResult--container">
      <img src={TittleBackground} alt="" />
      <h1 className="titleResult--container__h1">{props.title}</h1>
    </div>
  );
};

export default TitleResult;
