import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessagw";
import "./App.css";
import { useState } from "react";
import { todoItemsContext } from "./Store/Todo-Items-store";
const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const addItems = (itemName, itemDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDate },
    ]);
  };
  const handleDelteItem = (deletedItem) => {
    let deleteButton = todoItems.filter((item) => item.name !== deletedItem);
    setTodoItems(deleteButton);
  };
  return (
    <todoItemsContext.Provider value={{ todoItems, addItems, handleDelteItem }}>
      <center className="Todo-container">
        <Appname></Appname>
        <Addtodo></Addtodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </todoItemsContext.Provider>
  );
};
export default App;
