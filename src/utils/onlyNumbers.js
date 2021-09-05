const OnlyNumbers = (e) => {
  const pattern = new RegExp(/\d/);
  return pattern.test(e);
};

export { OnlyNumbers };
