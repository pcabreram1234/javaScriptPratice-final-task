export const validatePercent = (data, maxPerc) => {
  if (data > maxPerc) {
    alert(`El % asignado para seguro médico no puede ser mayor a ${maxPerc}`);
    data = [];
    return 0;
  }
};
