const ErrorMessage = ({ fooditems }) => {
  return <>{fooditems.length === 0 && <h2>i am still hungry</h2>}</>;
};
export default ErrorMessage;
