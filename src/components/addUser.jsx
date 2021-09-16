import React, { useRef } from "react";
import addUserIcon from "../assets/images/Add user.png";
import Contries from "../json/contries.json";
import "../styles/AddUser.css";

const AddUser = (
  {
    handleUserName,
    handleCountry,
    handleProfesion,
    setRefinput,
    setCountryRef,
  },
  props
) => {
  const contriesList = Contries;

  const getInfo = (e) => {
    return e;
  };

  return (
    <div className="AddUser--container">
      <div className="mainContainer">
        <div className="col">
          <input
            type="text"
            placeholde="Nombre..."
            ref={props.refInput}
            onChange={(e) => {
              setRefinput(e.currentTarget);
              let data = e.currentTarget.value;
              data === ""
                ? handleUserInputFocus()
                : handleUserName(getInfo(data));
            }}
          />
          <select
            name=""
            id=""
            onChange={(e) => {
              let data =
                e.currentTarget.selectedOptions[0].innerHTML.toString();
              handleCountry(getInfo(data));
            }}
          >
            {contriesList.map((el) => {
              return (
                <option
                  key={el.code}
                  value={el.code}
                  onChange={(e) => {
                    setCountryRef(e.currentTarget.value);
                  }}
                >
                  {el.name}
                </option>
              );
            })}
          </select>
          <select
            name=""
            id=""
            onChange={(e) => {
              let data =
                e.currentTarget.selectedOptions[0].innerHTML.toString();
              handleProfesion(getInfo(data));
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

        <div className="col">
          <img src={addUserIcon} alt="" className="addUserIcon" />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
