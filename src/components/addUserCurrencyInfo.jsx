import React from "react";
import addCurrencyInfoIcon from "../assets/images/AccountBalance.png";
import "../styles/AddUserCurrencyInfo.css";
import { validateInputNumbers } from "../utils/validateInputNumbers";
import { validatePercent } from "../utils/validatePercent";

const AddUserCurrencyInfo = ({
  handleSalary,
  handleMedicare,
  handlePensionFund,
  handleAditionalExpenxes,
}) => {
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
              let data = parseInt(e.currentTarget.value);
              validateInputNumbers(e, data, handleSalary);
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
              let data = parseInt(e.currentTarget.value);
              if (validatePercent(data, 20) != 0) {
                validateInputNumbers(e, data, handleMedicare);
              } else {
                handleMedicare([], e.currentTarget, handleMedicare);
              }
            }}
          />
          <label htmlFor="SNS" className="AddUserCurrencyInfo--label">
            .00
          </label>
        </div>

        <div className="AddUserCurrencyInfo--col">
          <input
            type="number"
            placeholder="Fondo de Pensiones %"
            id="AFP"
            className="AddUserCurrencyInfo--input"
            onChange={(e) => {
              let data = parseInt(e.currentTarget.value);

              if (validatePercent(data, 5) != 0) {
                validateInputNumbers(e, data, handlePensionFund);
              } else {
                handleMedicare([], e.currentTarget, handlePensionFund);
              }
            }}
          />
          <label htmlFor="AFP" className="AddUserCurrencyInfo--label">
            .00
          </label>
        </div>

        <div className="AddUserCurrencyInfo--col">
          <input
            type="number"
            placeholder="Otros Gastos RD$"
            id="GASTOS"
            className="AddUserCurrencyInfo--input"
            onChange={(e) => {
              let data = parseInt(e.currentTarget.value);
              validateInputNumbers(e, data, handleAditionalExpenxes);
            }}
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
