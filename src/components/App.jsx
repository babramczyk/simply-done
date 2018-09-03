import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos/Todos";
import "typeface-roboto";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Simply Done</h1>
        </header>
        <Todos />
      </div>
    );
  }
}

export default App;
