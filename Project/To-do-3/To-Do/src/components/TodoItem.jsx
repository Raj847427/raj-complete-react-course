import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "../Store/Todo-Items-store";
import { useContext } from "react";
const TodoItem = ({ todoName, todoDate }) => {
  const { handleDelteItem } = useContext(todoItemsContext);
  return (
    <>
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => handleDelteItem(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
