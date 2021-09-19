import React, { useRef, useState } from "react";
import AddUser from "../components/addUser";
import AddUserCurrencyInfo from "../components/addUserCurrencyInfo";
import AddButton from "../components/addButton";
import CancelButton from "../components/cancelButton";
import CalcButton from "../components/CalcButton";
import { validateInputs } from "../utils/validateInputs";
import { ClearInputs } from "../utils/clearInputs";
import { DomObjetct } from "../utils/DomObjectsSelector";
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

  const refInput = useRef(null);
  const refCountry = useRef(null);
  const refProfesion = useRef(null);

  const setRefinput = (input) => {
    refInput.current = input;
  };

  const handleUserInputFocus = () => {
    refInput.current.focus();
    console.log(refInput);
  };

  const setCountryRef = (country) => {
    refCountry.current = country;
  };
  const setRefProfesion = (currentProfesion) => {
    refProfesion.current = currentProfesion;
  };

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
    if (country.length === 0 || country == "Seleccione un pais") {
      alert("Favor de seleccionar el pais");
      setCountryRef(document.querySelector(DomObjetct.pais.toString()));
      refCountry.current.focus();
      return;
    } else if (
      profesion.length === 0 ||
      profesion === "Seleccionar una opción"
    ) {
      alert("Favor de seleccionar la profesión");
      setRefProfesion(document.querySelector(DomObjetct.profesion.toString()));
      refProfesion.current.focus();
      return;
    } else {
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
    }
  };

  const restUsersInfo = () => {
    let question = confirm(
      "En verdad deseas detener el proceso de añadir más datos?"
    );
    question
      ? (setUsersInfo([]),
        ClearInputs(),
        refInput !== null
          ? handleUserInputFocus()
          : setRefinput(document.querySelector(DomObjetct.nombre.toString())),
        handleUserInputFocus())
      : null;
  };

  return (
    <div>
      <AddUser
        handleUserName={handleUserName}
        handleCountry={handleCountry}
        handleProfesion={handleProfesion}
        setRefinput={setRefinput}
        setCountryRef={setCountryRef}
        setRefProfesion={setRefProfesion}
        refInput={refInput}
        handleUserInputFocus={handleUserInputFocus}
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
        <Link
          to="/calc"
          onClick={(e) => {
            usersInfo.length < 2
              ? (alert("Favor de introducir por lo menos dos personas"),
                e.preventDefault(),
                refInput.current !== null
                  ? refInput.current.focus()
                  : setRefinput(document.querySelector(DomObjetct.nombre)),
                refInput.current.focus())
              : 0;
          }}
        >
          <CalcButton />
        </Link>
      </div>
    </div>
  );
};

export default AddPeopleInfo;
