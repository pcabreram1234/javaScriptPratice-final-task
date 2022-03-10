import React, { useRef, useState } from "react";
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

  const refInput = useRef(null);
  const refCountry = useRef(null);
  const refProfesion = useRef(null);
  const refSalary = useRef(null);
  const refMedicare = useRef(null);
  const refPensionFund = useRef(null);
  const refAditionalExpenses = useRef(null);
  const refCancelButton = useRef(null);

  const setRefinput = (input) => {
    refInput.current = input;
  };

  const setRefCancelButton = (button) => {
    refCancelButton.current = button;
  };

  const handleUserInputFocus = () => {
    refInput.current.focus();
  };

  const handleUserName = (name, newRef) => {
    name === "" ? setName([""]) : setName(name);
    refInput.current = newRef;
  };

  const handleCountry = (country, newRef) => {
    country === "" ? setCountry([""]) : setCountry(country);
    refCountry.current = newRef;
  };

  const handleProfesion = (profesion, newRef) => {
    profesion === "" ? setProfesion([""]) : setProfesion(profesion);
    refProfesion.current = newRef;
  };

  const handleSalary = (salary, newRef) => {
    refSalary.current = newRef;
    setSalary(salary);
  };

  const handleMedicare = (medicare, newRef) => {
    refMedicare.current = newRef;
    medicare === 0 || medicare === NaN ? setMedicare(0) : setMedicare(medicare);
  };

  const handlePensionFund = (pension, newRef) => {
    refPensionFund.current = newRef;
    pension === 0 || pension === NaN
      ? setPensionFund([])
      : setPensionFund(pension);
  };

  const handleAditionalExpenxes = (expense, newRef) => {
    refAditionalExpenses.current = newRef;
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
      return;
    } else if (
      profesion.length === 0 ||
      profesion === "Seleccionar una opción"
    ) {
      alert("Favor de seleccionar la profesión");
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
          ClearInputs({
            refInput,
            refCountry,
            refProfesion,
            refAditionalExpenses,
            refMedicare,
            refSalary,
            refPensionFund,
          }))
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
        ClearInputs({
          refInput,
          refCountry,
          refProfesion,
          refAditionalExpenses,
          refMedicare,
          refSalary,
          refPensionFund,
        });
      refCancelButton.current.disabled = false;
    }
  };

  const restUsersInfo = () => {
    let question = confirm(
      "En verdad deseas detener el proceso de añadir más datos?"
    );
    question
      ? (setUsersInfo([]),
        ClearInputs({
          refInput,
          refCountry,
          refProfesion,
          refAditionalExpenses,
          refMedicare,
          refSalary,
          refPensionFund,
        }),
        (refCancelButton.current.disabled = true),
        refInput.current.focus())
      : refInput.current.focus();
  };

  const handlePatternNum = (el) => {
    let regExp = new RegExp(/[0-9]{1,}/);
    regExp.test(el) ? el : null;
  };

  handlePatternNum();

  return (
    <div className="AddPeople_container">
      <AddUser
        handleUserName={handleUserName}
        handleCountry={handleCountry}
        handleProfesion={handleProfesion}
        handleUserInputFocus={handleUserInputFocus}
        setRefinput={setRefinput}
        handlePatternNum={handlePatternNum}
      />
      <AddUserCurrencyInfo
        handleSalary={handleSalary}
        handleMedicare={handleMedicare}
        handlePensionFund={handlePensionFund}
        handleAditionalExpenxes={handleAditionalExpenxes}
      />

      <div className="buttonsContainer">
        <AddButton handleUserInfo={handleUserInfo} />
        <CancelButton
          restUsersInfo={restUsersInfo}
          setRefCancelButton={setRefCancelButton}
        />
        <Link
          to={{
            pathname: "/calc",
            state: { usersInfo },
          }}
        >
          <CalcButton
            usersInfo={usersInfo}
            refInput={refInput}
            setRefinput={setRefinput}
          />
        </Link>
      </div>
    </div>
  );
};

export default AddPeopleInfo;
