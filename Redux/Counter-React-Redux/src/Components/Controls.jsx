import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };
  const handleAdd = () => {
    dispatch({
      type: "Add",
      payload: {
        num: input.current.value,
      },
    });
  };
  const handleSubtract = () => {
    dispatch({
      type: "Subtract",
      payload: {
        num: input.current.value,
      },
    });
  };
  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY-TOGGLE" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Ente number"
          className="btn btn-primary input"
          ref={input}
        />
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubtract}
        >
          subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
