import { todoItemsContext } from "../Store/Todo-Items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  const { todoItems } = useContext(todoItemsContext);
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            key={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
