import React from "react";
import cancelIcon from "../assets/images/Close.png";

import "../styles/CancelButton.css";

const CancelButton = ({ clearInputs }) => {
  return (
    <button className="cancel" type="reset" role="button" onClick={clearInputs}>
      <img src={cancelIcon} alt="" className="saveIcon" />
      <span>Limpiar</span>
    </button>
  );
};

export default CancelButton;
