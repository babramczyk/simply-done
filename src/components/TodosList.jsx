import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodosList extends Component {
  render() {
    return <ul className="todos-list">{this.renderTodos()}</ul>;
  }

  renderTodos() {
    return this.props.todos.map((text, index) => {
      return <TodoItem text={text} key={index} />;
    });
  }
}

export default TodosList;
