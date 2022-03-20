const onlyLetters = (e) => {
  const string = e.currentTarget.value;
  const pattern = new RegExp(/[a-zA-Z\s]/i);
  let out = "";

  for (let i = 0; i < string.length; i++) {
    if (pattern.test(string[i])) {
      out += string[i];
    } else {
      out.replace(string[i], "");
    }
  }

  return out;
};

export { onlyLetters };
