import { useContext, useRef } from "react";
import styles from "./Addtodo.module.css";
import { MdOutlineAddComment } from "react-icons/md";
import { todoItemsContext } from "../Store/Todo-Items-store";

const Addtodo = () => {
  const { addItems } = useContext(todoItemsContext);
  const textInput = useRef(0);
  const dateInput = useRef(0);
  const handleAddItem = (event) => {
    console.log(event.preventDefault());
    const textInputItem = textInput.current.value;
    const dateInputItem = dateInput.current.value;
    textInput.current.value = "";
    dateInput.current.value = "";
    addItems(textInputItem, dateInputItem);
  };
  return (
    <>
      <form className="container text-center" onSubmit={handleAddItem}>
        <div className={"row kg-row"}>
          <div className="col-6">
            <input
              type="text"
              ref={textInput}
              placeholder="Enter Todo item here"
            />
          </div>
          <div className="col-4">
            <input type="date" name="Date" id="Date" ref={dateInput} />
          </div>
          <div className="col-2">
            <button className="btn btn-success kg-button">
              <MdOutlineAddComment />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Addtodo;
