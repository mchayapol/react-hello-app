import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My World</h2>
        </div>
        <p className="App-intro">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <p className="App-intro">
          <img src="https://blog.tinned-software.net/wp-content/uploads/git-branches-1.png" />
        </p>
      </div>
    );
  }
}

export default App;
