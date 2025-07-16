import Button from "./Button";
const ButtonContainer = ({ button, Buttonclick }) => {
  return (
    <>
      <div className="Button-container">
        {button.map((item) => (
          <Button item={item} key={item} onClick={Buttonclick}></Button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
