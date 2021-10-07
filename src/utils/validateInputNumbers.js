export const validateInputNumbers = (e, data, handle) => {
  data < 0 || data === "" || data === 0
    ? (alert("Valor incorrecto"), handle([], e.currentTarget))
    : handle(data, e.currentTarget);
};
