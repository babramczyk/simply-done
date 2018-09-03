import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li
        className={`todo-list__item ${
          this.props.todo.completed ? "todo-list__item--completed" : ""
        }`}
      >
        <div
          className="todo-list__complete-button"
          onClick={() => this.props.onToggle(this.props.todo.id)}
        />
        <span className={"todo-list__item-text"}>{this.props.todo.text}</span>
      </li>
    );
  }
}

export default TodoItem;
