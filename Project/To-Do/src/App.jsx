import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./App.css";
const App = () => {
  return (
    <center className="Todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <div className="items-container">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
};
export default App;
