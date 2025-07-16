import Heading from "./Components/Heading";
import Slogan from "./Components/Slogan";
import Time from "./Components/Time";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = () => {
  return (
    <>
      <center className="clock">
        <Heading></Heading>
        <Slogan></Slogan>
        <Time></Time>
      </center>
    </>
  );
};
export default App;
