import React from "react";
import addCurrencyInfoIcon from "../assets/images/AccountBalance.png";
import { ValidateMedicare } from "../utils/validateMedicare";
import "../styles/AddUserCurrencyInfo.css";
import { validate } from "webpack";

const AddUserCurrencyInfo = ({ handleSalary, handleMedicare }) => {
  const getInfo = (e) => {
    return e;
  };
  return (
    <div className="AddUserCurrencyInfo">
      <div className="AddUserCurrencyInfo--imageIcon">
        <img src={addCurrencyInfoIcon} alt="" />
      </div>

      <div className="AddUserCurrencyInfo--maincontainer">
        <div className="AddUserCurrencyInfo--col">
          <input
            type="number"
            placeholder="Sueldo RD$..."
            id="sueldo"
            className="AddUserCurrencyInfo--input"
            onChange={(e) => {
              let data = e.currentTarget.value;
              handleSalary(getInfo(data));
            }}
          />
          <label htmlFor="Sueldo" className="AddUserCurrencyInfo--label">
            .00
          </label>
        </div>

        <div className="AddUserCurrencyInfo--col">
          <input
            type="number"
            placeholder="Seguro Medico %"
            id="SNS"
            className="AddUserCurrencyInfo--input"
            onChange={(e) => {
              let data = e.currentTarget.value;
              let medicarPorcent = ValidateMedicare(data);
              console.log(medicarPorcent);
         /*      ValidateMedicare(parseInt(data)) !== true
                ? handleMedicare(getInfo(e.currentTarget.value))
                : alert(
                    "El % asignado para seguro médico no puede ser mayor a 20%"
                  ); */
            }}
          />
          <label htmlFor="SNS" className="AddUserCurrencyInfo--label">
            .00
          </label>
        </div>

        <div className="AddUserCurrencyInfo--col">
          <input
            type="text"
            placeholder="Fondo de Pensiones %"
            id="AFP"
            className="AddUserCurrencyInfo--input"
          />
          <label htmlFor="AFP" className="AddUserCurrencyInfo--label">
            .00
          </label>
        </div>

        <div className="AddUserCurrencyInfo--col">
          <input
            type="text"
            placeholder="Otros Gastos RD$"
            id="GASTOS"
            className="AddUserCurrencyInfo--input"
          />
          <label htmlFor="GASTOS" className="AddUserCurrencyInfo--label">
            .00
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddUserCurrencyInfo;
