import React from "react";
import cancelIcon from "../assets/images/Close.png";

import "../styles/CancelButton.css";

const CancelButton = ({ restUsersInfo }) => {
  return (
    <button
      className="cancel"
      onClick={() => {
        restUsersInfo();
      }}
    >
      <img src={cancelIcon} alt="" className="saveIcon" />
      <span>cancelar</span>
    </button>
  );
};

export default CancelButton;
