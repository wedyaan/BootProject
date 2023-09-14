import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Stores from "./Pages/Stores";
import Report from "./Pages/Report";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Cfpcalculator from "./Components/Cfpcalculator";
import Chatbot from "./Components/Chatbot";
import MapComponent from "./component/MapComponent";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/FriendlyProducts" element={<Chatbot></Chatbot>}></Route>
        <Route path="/store" element={<Stores></Stores>}></Route>
        <Route path="/report" element={<Report></Report>}></Route>
        <Route path="/CarbonCal" element={<Cfpcalculator></Cfpcalculator>}></Route>
        <Route path="/mapco" element={<MapComponent></MapComponent>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
