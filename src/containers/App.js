import React, { useState } from "react";
import AddUser from "../components/addUser";
import AddUserCurrencyInfo from "../components/addUserCurrencyInfo";
import AddButton from "../components/addButton";
import CancelButton from "../components/cancelButton";
import { validateInputs } from "../utils/validateInputs";
import "../styles/App.css";

const App = () => {
  const [usersInfo, setUsersInfo] = useState([]);
  const [userName, setName] = useState([]);
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
    const vali = validateInputs(usersInfo);
    console.log(vali);
    /*     usersInfo === []
      ? setUsersInfo([
          userName,
          profesion,
          salary,
          country,
          medicare,
          pensionFund,
          AditionalExpenses,
        ])
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
        ]); */
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
        <CancelButton />
      </div>
    </div>
  );
};

export default App;
