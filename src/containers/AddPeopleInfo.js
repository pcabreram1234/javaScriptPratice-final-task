import React, { useRef, useState, useEffect } from "react";
import AddButton from "../components/addButton";
import CancelButton from "../components/cancelButton";
import useFetchApi from "../hooks/useFetchApi";
import { onlyNumbers } from "../utils/onlyNumbers";
import { onlyLetters } from "../utils/onlyLetters";
import "../styles/AddPeopleInfo.css";
import ResultByProfesion from "../components/RenderByProfesion";
import GeneralResult from "./GeneralResults";

const AddPeopleInfo = () => {
  const [usersInfo, setUsersInfo] = useState([]);
  const [userName, setName] = useState([]);
  const [country, setCountry] = useState([]);
  const [profesion, setProfesion] = useState([]);
  const [salary, setSalary] = useState([]);
  const [medicare, setMedicare] = useState([]);
  const [pensionFund, setPensionFund] = useState([]);
  const [AditionalExpenses, setAditionalExpenses] = useState([]);

  /* Referencias */
  const userRef = useRef();
  const countryRef = useRef();
  const profesionRef = useRef();
  const medicareRef = useRef();
  const pensionFundRef = useRef();
  const AditionalExpensesRef = useRef();

  /* Llamadas a API */
  let contriesList = useFetchApi(`${process.env.API_URL}/contries.json`);
  let profesionList = useFetchApi(`${process.env.API_URL}/profesions.json`);

  /* Variables globales */

  /* Funciones manejadoras */

  function verifyFields() {
    const verifyProfesion = hasField("Profesion", profesionRef);
    const verfyMedicare = hasField("Seguro Medico", medicareRef);
    const verifypensionFund = hasField("Fondo de pensiones", pensionFundRef);
    if (
      verifyProfesion === 1 ||
      verfyMedicare === 1 ||
      verifypensionFund === 1
    ) {
      return 1;
    }
  }

  function verifyExpenses(refInput, dataInputed) {
    if (parseInt(dataInputed) > parseInt(salary)) {
      alert("Los gastos no pueden ser mayores al salario");
      setAditionalExpenses([]);
      refInput.current.value = "";
    }
  }

  function sendUserInfo() {
    if (verifyFields() !== 1) {
      setUsersInfo([
        ...usersInfo,
        {
          userName,
          country,
          profesion,
          salary,
          medicare,
          pensionFund,
          AditionalExpenses,
        },
      ]);
      clearInputs();
    }
  }

  function hasField(field, ref) {
    if (ref.current.options[0].selected) {
      alert(`Favor de elegir un/una ${field}`);
      return 1;
    } else {
      return 0;
    }
  }

  /* Funcion que determina en los campos de seleccion si el valor inicial es 
  el que esta seleccionadoß */
  function resetField(ref) {
    ref.current.options[0].selected = "selected";
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendUserInfo();
  }

  /* Funcion que limpia los estados y los inputs asi como los select */
  function clearInputs() {
    userRef.current.focus();
    setName([]);
    setSalary([]);
    resetField(profesionRef);
    setProfesion([]);
    resetField(countryRef);
    setCountry([]);
    resetField(medicareRef);
    setMedicare([]);
    resetField(pensionFundRef);
    setPensionFund([]);
    setAditionalExpenses([]);
  }

  /* Renderizado */
  useEffect(() => {
    /* Enfoca el campo del nombre */
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  return (
    <div className="AddPeople_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre..."
          onChange={(e) => {
            setName(onlyLetters(e));
          }}
          value={userName}
          ref={userRef}
          required
        />

        <select
          name="countriesList"
          onChange={(e) => {
            let countrySelected =
              e.currentTarget.selectedOptions[0].innerHTML.toString();
            setCountry(countrySelected);
          }}
          ref={countryRef}
        >
          {contriesList.length > 0 &&
            contriesList.map((el) => {
              return (
                <option key={el.code} value={el.name}>
                  {el.name}
                </option>
              );
            })}
        </select>

        <select
          name="profesionList"
          onChange={(e) => {
            const profesionSelected =
              e.currentTarget.selectedOptions[0].innerHTML.toString();
            setProfesion(profesionSelected);
          }}
          ref={profesionRef}
        >
          {profesionList.length > 0 &&
            profesionList.map((prof) => {
              return (
                <option key={prof.id} value={prof.name}>
                  {prof.name}
                </option>
              );
            })}
        </select>

        <input
          type="text"
          placeholder="Sueldo RD$..."
          id="sueldo"
          className="AddUserCurrencyInfo--input"
          onChange={(e) => {
            setSalary(onlyNumbers(e));
          }}
          value={salary}
          required
        />

        <select
          onChange={(e) => {
            let medicareSelected = parseInt(
              e.currentTarget.selectedOptions[0].value
            );
            setMedicare(medicareSelected);
          }}
          ref={medicareRef}
        >
          <option value={0}>Seguro Medico</option>
          <option value="21">21%</option>
          <option value="15">15%</option>
          <option value="10">10%</option>
        </select>

        <select
          onChange={(e) => {
            let pensionSelected = parseInt(
              e.currentTarget.selectedOptions[0].value
            );
            setPensionFund(pensionSelected);
          }}
          ref={pensionFundRef}
        >
          <option value={0}>Fondo de pensiones</option>
          <option value="17">17%</option>
          <option value="15">15%</option>
          <option value="10">10%</option>
        </select>

        <input
          type="text"
          placeholder="Otros Gastos RD$"
          className="AddUserCurrencyInfo--input"
          onChange={(e) => {
            verifyExpenses(AditionalExpensesRef, e.currentTarget.value);
            setAditionalExpenses(onlyNumbers(e));
          }}
          value={AditionalExpenses}
          ref={AditionalExpensesRef}
          required
        />

        <div className="buttonsContainer">
          <AddButton />
          <CancelButton clearInputs={clearInputs} />
        </div>
      </form>

      <GeneralResult usersInfo={usersInfo} />
      {usersInfo.length > 0 && (
        <ResultByProfesion
          usersInfo={usersInfo}
          profesionList={profesionList}
        />
      )}
    </div>
  );
};

export default AddPeopleInfo;
