import "./App.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";
const App = () => {
  let button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  let [calVal, setCalVal] = useState("");
  let Buttonclick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  };
  return (
    <>
      <div className="calculator">
        <div>
          <Display calVal={calVal}></Display>
          <ButtonContainer
            button={button}
            Buttonclick={Buttonclick}
          ></ButtonContainer>
        </div>
      </div>
    </>
  );
};
export default App;
