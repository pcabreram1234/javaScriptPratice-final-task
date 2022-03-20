import React from "react";
import "../styles/AddButton.css";
import saveIcon from "../assets/images/Save.png";

const AddButton = () => {
  return (
    <button className="add" type="submit">
      <img src={saveIcon} alt="" className="saveIcon" />
      <span>Añadir</span>
    </button>
  );
};

export default AddButton;
