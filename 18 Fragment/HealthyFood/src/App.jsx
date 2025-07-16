import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/Fooditems";
import ErrorMessage from "./Components/ErrorMessage";
import Heading from "./Components/Heading";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import "./App.css";
import { useState } from "react";
const App = () => {
  // let foodItems = ["Dal", "Roti", "Milk", "Salad", "Curd"];
  // let foodItems = [];
  let [foodItems, setfoodItems] = useState([]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFood = event.target.value;
      event.target.value = "";
      let newFoods = [...foodItems, newFood];
      setfoodItems(newFoods);
    }
  };
  return (
    <>
      <Container>
        <Heading></Heading>

        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        <ErrorMessage fooditems={foodItems}></ErrorMessage>
        <FoodItems fooditems={foodItems}></FoodItems>
      </Container>
    </>
  );
};
export default App;
