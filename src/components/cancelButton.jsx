import React from "react";
import cancelIcon from "../assets/images/Close.png";

import "../styles/CancelButton.css";

const CancelButton = ({ restUsersInfo, setRefCancelButton }) => {
  return (
    <button
      onLoad={(e) => {
        setRefCancelButton(e.currentTarget);
        e.currentTarget.disabled = true;
      }}
      className="cancel"
      onClick={() => {
        restUsersInfo();
      }}
    >
      <img src={cancelIcon} alt="" className="saveIcon" />
      <span>Reiniciar</span>
    </button>
  );
};

export default CancelButton;
