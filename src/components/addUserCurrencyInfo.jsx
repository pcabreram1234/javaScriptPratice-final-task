import React from "react";
import addCurrencyInfoIcon from "../assets/images/AccountBalance.png";
import "../styles/AddUserCurrencyInfo.css";

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
              let data = e.currentTarget.value;
              handleSalary(getInfo(data), e.currentTarget);
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
              if (data > 20) {
                alert(
                  "El % asignado para seguro médico no puede ser mayor a 20%"
                );
                data = 0;
              }
              handleMedicare(getInfo(data), e.currentTarget);
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
              if (data > 5) {
                alert(
                  "El % asignado para seguro médico no puede ser mayor a 5%"
                );
                data = 0;
              }
              handlePensionFund(getInfo(data), e.currentTarget);
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
              handleAditionalExpenxes(getInfo(data), e.currentTarget);
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
