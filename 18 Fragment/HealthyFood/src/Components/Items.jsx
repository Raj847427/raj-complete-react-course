import style from "./Item.module.css";
const Items = ({ item, bought, handleBuyButtonClicked }) => {
  return (
    <>
      <li
        className={`  ${style["kg-item"]} list-group-item ${
          bought && "active"
        }`}
      >
        <span className={style["kg-span"]}>{item}</span>
        <button
          type="button"
          className={`btn btn-primary ${style.kgButton}`}
          onClick={handleBuyButtonClicked}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Items;
