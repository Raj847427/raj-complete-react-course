import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../Store/BagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);

  const found = bagItems.includes(item.id);

  const handleAdd = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {found ? (
          <button
            type="button"
            className=" btn-add-bag btn btn-danger"
            onClick={handleRemove}
          >
            Remove
          </button>
        ) : (
          <button
            type="button"
            className=" btn-add-bag btn btn-success"
            onClick={handleAdd}
          >
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};
export default HomeItem;
