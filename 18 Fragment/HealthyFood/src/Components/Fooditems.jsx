import { useState } from "react";
import Items from "./Items";
const FoodItems = ({ fooditems }) => {
  let [activeItem, setActiveItem] = useState([]);
  const handleBuyButtonClicked = (item, event) => {
    console.log(`buy item ${item} `);
    let activeItems = [...activeItem, item];
    setActiveItem(activeItems);
  };
  return (
    <>
      <ul className="list-group">
        {fooditems.map((item) => (
          <Items
            key={item}
            item={item}
            bought={activeItem.includes(item)}
            handleBuyButtonClicked={(event) =>
              handleBuyButtonClicked(item, event)
            }
          ></Items>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
