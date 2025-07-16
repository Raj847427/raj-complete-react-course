import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../Store/Counter";
import { privacyAction } from "../Store/Privacy";

const Controls = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    dispatch(counterAction.Decrement());
  };
  const handleAdd = () => {
    dispatch(counterAction.Add(input.current.value));
    input.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(counterAction.Subtract(input.current.value));
    input.current.value = "";
  };
  const handlePrivacyToggle = () => {
    dispatch(privacyAction.toggle());
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
