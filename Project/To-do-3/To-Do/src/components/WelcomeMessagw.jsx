import { todoItemsContext } from "../Store/Todo-Items-store";
import { useContext } from "react";
const WelcomeMessage = () => {
  const { todoItems } = useContext(todoItemsContext);
  return <>{todoItems.length === 0 && <p>Enjoy Your Day</p>}</>;
};
export default WelcomeMessage;
