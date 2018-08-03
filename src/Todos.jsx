import React, { Component } from "react";
import CreateTodo from "./CreateTodo";
import TodosList from "./TodosList";

class Todos extends Component {
  render() {
    const todos = [
      "Build a todo app in React",
      "Get noticed",
      "Get a better life"
    ];

    return (
      <div className="todos">
        <CreateTodo />
        <TodosList todos={todos} />
      </div>
    );
  }
}

export default Todos;
