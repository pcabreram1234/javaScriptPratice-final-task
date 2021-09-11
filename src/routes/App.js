import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AddPeopleInfo from "../containers/AddPeopleInfo";
import GeneralResults from "../containers/GeneralResults";
import "../styles/App.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={AddPeopleInfo}></Route>
      <Route exact path="/calc" component={GeneralResults}></Route>
    </div>
  </BrowserRouter>
);

export default App;
