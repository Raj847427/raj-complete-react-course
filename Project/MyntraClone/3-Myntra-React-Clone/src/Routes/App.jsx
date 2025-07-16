import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import FetchStatus from "../Components/FetchStatus";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading";

function App() {
  const fetchStatus = useSelector((store) => store.fetchstatus);
  return (
    <>
      <Header></Header>
      <FetchStatus></FetchStatus>
      {fetchStatus.currentFetching ? <Loading /> : <Outlet />}

      <Footer></Footer>
    </>
  );
}

export default App;
