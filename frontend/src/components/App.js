import React, { Component } from "react";
import { render } from "react-dom";
import Navigation from "./Navbar";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
