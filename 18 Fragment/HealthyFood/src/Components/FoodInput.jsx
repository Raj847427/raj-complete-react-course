import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Foodinput:"
        className={styles.foodinput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default FoodInput;
