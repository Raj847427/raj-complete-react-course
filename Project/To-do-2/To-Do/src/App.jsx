import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
const App = () => {
  const todoItems = [
    {
      name: "buy milk",
      dueDate: "4/10/2023",
    },
    {
      name: "buy samosa",
      dueDate: "4/10/2023",
    },
    {
      name: "buy ghee",
      dueDate: "4/10/2025",
    },
  ];
  return (
    <center className="Todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
};
export default App;
