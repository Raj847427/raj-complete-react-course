import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";
import PrivacyMessage from "./Components/PrivacyMessage";
import "./App.css";
import { useSelector } from "react-redux";
const App = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        {" "}
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {" "}
            {privacy ? (
              <PrivacyMessage></PrivacyMessage>
            ) : (
              <DisplayCounter></DisplayCounter>
            )}
            <Controls></Controls>
          </div>{" "}
        </Container>
      </center>
    </>
  );
};
export default App;
