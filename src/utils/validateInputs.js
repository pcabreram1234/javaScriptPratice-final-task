export const validateInputs = (props) => {
  for (const iterator of props) {
    console.log(iterator);
    iterator.lenght === 0 || iterator.lenght < 7 || iterator === undefined
      ? alert("Faltan datos por completar")
      : true;
  }
};
