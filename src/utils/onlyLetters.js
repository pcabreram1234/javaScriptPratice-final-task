const onlyLetters = (e) => {
  const pattern = new RegExp("[a-zA-Z]");
  if (pattern.test(e)!==undefined) {
    return false;
  } 
};

export { onlyLetters };
