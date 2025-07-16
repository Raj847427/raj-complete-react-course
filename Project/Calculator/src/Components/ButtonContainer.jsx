import Button from "./Button";
const ButtonContainer = ({ button }) => {
  return (
    <>
      <div className="Button-container">
        {button.map((item) => (
          <Button item={item} key={item}></Button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
