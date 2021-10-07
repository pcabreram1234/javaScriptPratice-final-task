/// Funcion que calcula la sumataria de cualquier valor tipo numero del objeto usersInfo
export const sumData = (usersInfo, typeOfDate) => {
  let sumTotal = 0;
  for (const e of usersInfo) {
    let currentEl = e[typeOfDate];
    sumTotal += parseInt(currentEl);
  }
  ///Retorna el valor de la suma en formato de miles con la coma (,)
  return Intl.NumberFormat().format(sumTotal);
};

export const calcPercentage = (usersInfo, typeOfData) => {
  let totalDatatoCalc = 0;
  let totalSalary = 0;
  for (const e of usersInfo) {
    let currentEl = e[2];
    totalSalary += parseInt(currentEl); ///Total del sueldo
    totalDatatoCalc += parseInt(e[typeOfData]); ///Calcula el total de parametro (Medicar, pensiones, etc)
  }
  return Math.ceil(((totalDatatoCalc * 100) / totalSalary) * 100, 2);
};
