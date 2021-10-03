export const ClearInputs = (refObject) => {
  refObject.refAditionalExpenses.current.value = "";
  refObject.refInput.current.value = "";
  refObject.refMedicare.current.value = "";
  refObject.refPensionFund.current.value = "";
  refObject.refSalary.current.value = "";
  refObject.refCountry.current[0].selected = true;
  refObject.refProfesion.current[0].selected = true;
  refObject.refInput.current.focus();
};
