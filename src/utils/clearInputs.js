export const ClearInputs = () => {
  document.querySelectorAll("input").forEach((el) => {
    el.value = "";
  });
  document
    .querySelector(
      "#app > div > div.AddUser--container > div > div:nth-child(1) > input[type=text]"
    )
    .focus();
};
