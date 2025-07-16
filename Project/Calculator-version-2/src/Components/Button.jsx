const Button = ({ item, onClick }) => {
  return (
    <>
      <button onClick={() => onClick(item)} className="button">
        {item}
      </button>
    </>
  );
};
export default Button;
