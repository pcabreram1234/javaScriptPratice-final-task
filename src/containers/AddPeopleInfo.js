import React, { useState } from "react";
import AddUser from "../components/addUser";
import AddUserCurrencyInfo from "../components/addUserCurrencyInfo";
import AddButton from "../components/addButton";
import CancelButton from "../components/cancelButton";
import CalcButton from "../components/CalcButton";
import { validateInputs } from "../utils/validateInputs";
import { ClearInputs } from "../utils/clearInputs";
import { Link } from "react-router-dom";
import "../styles/AddPeopleInfo.css";

const AddPeopleInfo = () => {
  const [usersInfo, setUsersInfo] = useState([]);
  const [userName, setName] = useState({});
  const [country, setCountry] = useState([]);
  const [profesion, setProfesion] = useState([]);
  const [salary, setSalary] = useState([]);
  const [medicare, setMedicare] = useState([]);
  const [pensionFund, setPensionFund] = useState([]);
  const [AditionalExpenses, setAditionalExpenses] = useState([]);

  const handleUserName = (name) => {
    name === "" ? setName([""]) : setName(name);
  };

  const handleCountry = (country) => {
    country === "" ? setCountry([""]) : setCountry(country);
  };

  const handleProfesion = (profesion) => {
    profesion === "" ? setProfesion([""]) : setProfesion(profesion);
  };

  const handleSalary = (salary) => {
    setSalary(salary);
  };

  const handleMedicare = (medicare) => {
    medicare === 0 || medicare === NaN
      ? setMedicare([])
      : setMedicare(medicare);
  };

  const handlePensionFund = (pension) => {
    pension === 0 || pension === NaN
      ? setPensionFund([])
      : setPensionFund(pension);
  };

  const handleAditionalExpenxes = (expense) => {
    const totalMedicare = (medicare * salary) / 100;
    const totalPensionFund = (pensionFund * salary) / 100;
    totalMedicare + totalPensionFund + expense > salary
      ? (alert(
          "El total de gastos con los demás descuentos sobrepasa el salario"
        ),
        setAditionalExpenses([]))
      : setAditionalExpenses(expense);
  };

  const handleUserInfo = () => {
    let temporalUsersInfo = [];
    temporalUsersInfo.push(
      userName,
      country,
      profesion,
      salary,
      medicare,
      pensionFund,
      AditionalExpenses
    );

    validateInputs(temporalUsersInfo) !== 7
      ? alert("Faltan campos por llenar")
      : usersInfo === []
      ? (setUsersInfo([
          userName,
          profesion,
          salary,
          country,
          medicare,
          pensionFund,
          AditionalExpenses,
        ]),
        ClearInputs())
      : setUsersInfo([
          ...usersInfo,
          [
            userName,
            profesion,
            salary,
            country,
            medicare,
            pensionFund,
            AditionalExpenses,
          ],
        ]),
      ClearInputs();
  };

  const restUsersInfo = () => {
    let question = confirm(
      "En verdad deseas detener el proceso de añadir más datos?"
    );
    question ? setUsersInfo([]) : null;
  };
  return (
    <div>
      <AddUser
        handleUserName={handleUserName}
        handleCountry={handleCountry}
        handleProfesion={handleProfesion}
      />
      <AddUserCurrencyInfo
        handleSalary={handleSalary}
        handleMedicare={handleMedicare}
        handlePensionFund={handlePensionFund}
        handleAditionalExpenxes={handleAditionalExpenxes}
      />
      <div className="buttonsContainer">
        <AddButton handleUserInfo={handleUserInfo} />
        <CancelButton restUsersInfo={restUsersInfo} />
        <Link to="/calc">
          <CalcButton />
        </Link>
      </div>
    </div>
  );
};

export default AddPeopleInfo;
