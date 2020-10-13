import React, { Component } from "react";
import SignIn from "./pages/SignIn";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome To My Pregnancy Journal</h2>
        </div>
        <SignIn />
      </div>
    );
  }
}

export default App;

