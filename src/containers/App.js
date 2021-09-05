import React, { useState } from "react";
import AddUser from "../components/addUser";
import AddUserCurrencyInfo from "../components/addUserCurrencyInfo";
import AddButton from "../components/addButton";
import CancelButton from "../components/cancelButton";
import "../styles/App.css";

const App = () => {
  const [userName, setName] = useState([]);
  const [country, setCountry] = useState([]);
  const [profesion, setProfesion] = useState([]);
  const [salary, setSalary] = useState([]);
  const [medicare, setMedicare] = useState([]);
  const [pensionFund, setPensionFund] = useState([]);
  const [Aexpenses, setAexpenses] = useState([]);

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
    setMedicare(medicare);
  };

  return (
    <div onChange={console.log(userName)}>
      <AddUser
        handleUserName={handleUserName}
        handleCountry={handleCountry}
        handleProfesion={handleProfesion}
      />
      <AddUserCurrencyInfo
        handleSalary={handleSalary}
        handleMedicare={handleMedicare}
      />
      <div className="buttonsContainer">
        <AddButton />
        <CancelButton />
      </div>
    </div>
  );
};

export default App;
