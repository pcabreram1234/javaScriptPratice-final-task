/* Funcion que calcula la sumataria de cualquier valor */
/* tipo numero del objeto usersInfo */

export function sumData(...props) {
  let sumTotal = 0;
  const usersInfo = arguments[0];
  const property = arguments[1];

  for (let i = 0; i < usersInfo.length; i++) {
    /* Accedemos al valor de la propiedad */
    let valueAdd = parseInt(usersInfo[i][property.toString()]);
    sumTotal += valueAdd;
  }

  ///Retorna el valor de la suma en formato de miles con la coma (,)
  return Intl.NumberFormat().format(sumTotal);
}

export function calcPercentage(...props) {
  const usersInfo = arguments[0];
  const property = arguments[1];
  let sumPorcent = 0;

  for (let i = 0; i < usersInfo.length; i++) {
    sumPorcent += parseInt(usersInfo[i][property.toString()]);
  }
  return sumPorcent / usersInfo.length;
}
