import React from "react";
import "../styles/AddButton.css";
import saveIcon from "../assets/images/Save.png";

const AddButton = ({ handleUserInfo }, props) => {
  return (
    <button
      className="add"
      onClick={() => {
        console.log(handleUserInfo(props.length));
      }}
    >
      <img src={saveIcon} alt="" className="saveIcon" />
      <span>Añadir</span>
    </button>
  );
};

export default AddButton;
