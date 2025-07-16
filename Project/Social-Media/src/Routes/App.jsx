import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import PostListProvider from "../Store/Post-List-Store";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("");
  return (
    <PostListProvider>
      <div className="socialMe">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="socialContent">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
};
export default App;
