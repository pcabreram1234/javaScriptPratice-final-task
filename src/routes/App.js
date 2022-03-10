import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AddPeopleInfo from "../containers/AddPeopleInfo";
import GeneralResults from "../containers/GeneralResults";
import blurryGradientHaikei from "../assets/images/blurry-gradient-haikei.png";
import "../styles/App.css";

const style = {
  backgroundImage: "url(" + blurryGradientHaikei + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
};

const App = () => (
  <BrowserRouter>
    <div className="App" style={style}>
      <Route exact path="/" component={AddPeopleInfo}></Route>
      <Route exact path="/calc" component={GeneralResults}></Route>
    </div>
  </BrowserRouter>
);

export default App;
