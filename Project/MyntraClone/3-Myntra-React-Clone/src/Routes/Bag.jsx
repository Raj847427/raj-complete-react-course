import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const bagItems = bag.indexOf(item.id);
    return bagItems >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}

          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
