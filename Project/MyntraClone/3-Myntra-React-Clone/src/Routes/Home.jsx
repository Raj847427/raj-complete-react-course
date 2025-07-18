import { useSelector } from "react-redux";
import HomeItem from "../Components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem item={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
};
export default Home;
