import { useState } from "react";
import { onlyLetters } from "../utils/onlyLetters";

export const UseInputName = () => {
  const [inputName, setInputName] = useState([]);

  const newLetter = onlyLetters(e.target.value);
  setInputName(newLetter);
};
