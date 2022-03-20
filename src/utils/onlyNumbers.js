const onlyNumbers = (e) => {
  const key = e.key;
  const string = e.currentTarget.value;
  const pattern = new RegExp(/\d/);
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

export { onlyNumbers };
