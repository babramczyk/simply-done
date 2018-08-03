import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos";

class App extends Component {
  render() {
    return (
      <div className="todos">
        <Todos />
      </div>
    );
  }
}

export default App;
