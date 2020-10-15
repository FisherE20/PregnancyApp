import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Registeries from "./pages/Registeries"
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"




function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch> 
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/registeries" component={Registeries} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;