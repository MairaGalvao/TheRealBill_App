import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LivingIndex from "./Components/LivingIndex";
import { useHistory as history } from "react-router-dom";
import SmartResultCard from "./Components/SmartResultCard";
import "./css/App.css";
import { useDispatch } from "react-redux";
import { fetchPackages } from "./actions/actions";
import { NavBar } from "./Components/NavBar";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { PackageInfo } from "./Components/PackageInfo";

require("dotenv").config(); //todo maybe can be removed
export const NUMBEO_ACCESS_KEY = process.env.REACT_APP_NUMBEO_KEY;

function App() {
  return (
    <>
      <Router history={history}>
        <>
          <NavBar />
        </>
        <Switch>
          <Route exact path={"/"} component={About} />
          <Route path={"/livingindex"} component={LivingIndex} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/therealbill"} component={SmartResultCard} />
          <Route path={"/lifestyleinfo"} component={PackageInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
