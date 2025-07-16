import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
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
