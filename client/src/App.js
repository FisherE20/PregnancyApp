import React, { Component } from "react";
import SignUp from "./pages/SignUp";



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome To My Pregnancy Journal</h2>
        </div>
        <SignUp />
      </div>
    );
  }
}

export default App;

