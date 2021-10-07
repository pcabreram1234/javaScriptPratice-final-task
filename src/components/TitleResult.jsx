import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../assets/images/Undo.png";
import TittleBackground from "../assets/images/TittleBackground.png";
import "../styles/TitleResult.css";
const TitleResult = (props) => {
  return (
    <div className="titleResult--container">
      <Link to="/">
        <img src={backIcon} className="BackIcon" />
      </Link>
      <img src={TittleBackground} alt="" className="Background" />
      <h1 className="titleResult--container__h1">{props.title}</h1>
    </div>
  );
};

export default TitleResult;
