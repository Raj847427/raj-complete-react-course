import "./App.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
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
  return (
    <>
      <div className="calculator">
        <div>
          <Display></Display>
          <ButtonContainer button={button}></ButtonContainer>
        </div>
      </div>
    </>
  );
};
export default App;
