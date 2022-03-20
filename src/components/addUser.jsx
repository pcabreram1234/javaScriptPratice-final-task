import React from "react";
import Contries from "../json/contries.json";
import "../styles/AddUser.css";

const AddUser = ({
  handleUserName,
  handleCountry,
  handleProfesion,
  handleUserInputFocus,
  setRefinput,
}) => {
  const contriesList = Contries;

  const getInfo = (e) => {
    return e;
  };

  return (
    <div className="AddUser--container">
      <div className="mainContainer">
        <input
          type="text"
          placeholder="Nombre..."
          autoFocus
          onLoad={(e) => {
            setRefinput(e.currentTarget);
            handleUserInputFocus();
          }}
          onChange={(e) => {
            let data = e.currentTarget.value;
            data === ""
              ? handleUserInputFocus()
              : handleUserName(getInfo(data), e.currentTarget);
          }}
        />
        <select
          name=""
          id=""
          onChange={(e) => {
            let data = e.currentTarget.selectedOptions[0].innerHTML.toString();
            handleCountry(getInfo(data), e.currentTarget);
          }}
        >
          {contriesList.map((el) => {
            return (
              <option key={el.code} value={el.code}>
                {el.name}
              </option>
            );
          })}
        </select>
        <select
          name=""
          id=""
          onChange={(e) => {
            let data = e.currentTarget.selectedOptions[0].innerHTML.toString();
            handleProfesion(getInfo(data), e.currentTarget);
          }}
        >
          <option value="">Seleccionar una opción</option>
          <option value="">Estudiante</option>
          <option value="">Desarrollador Web</option>
          <option value="">Maestro</option>
          <option value="">Arquitecto</option>
          <option value="">Doctor</option>
          <option value="">Policía</option>
        </select>
      </div>
    </div>
  );
};

export default AddUser;
