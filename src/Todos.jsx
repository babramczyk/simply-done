import React, { Component } from "react";
import CreateTodo from "./CreateTodo";

class Todos extends Component {
  render() {
    return (
      <div className="todos">
        <CreateTodo />
      </div>
    );
  }
}

export default Todos;
