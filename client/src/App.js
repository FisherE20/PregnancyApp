import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Gallery from "./pages/Gallery";
import Registeries from "./pages/Registeries";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/journal">
            <Journal />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/registeries">
            <Registeries />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
