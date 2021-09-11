export const validateInputs = (props) => {
  let counter = 0;

  for (const key in props) {
    let currentObject = props[key].length;
    currentObject !== 0 ? counter++ : (counter = 0);
  }
  return counter;
};
