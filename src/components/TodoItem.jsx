import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li
        className={`todo-list__item ${
          this.props.todo.completed ? "todo-list__item--completed" : ""
        }`}
      >
        {this.renderButton()}
        <span className={"todo-list__item-text"}>{this.props.todo.text}</span>
      </li>
    );
  }

  renderButton() {
    var isCompleted = this.props.todo.completed;
    if (!isCompleted) {
      return (
        <div
          className="todo-list__complete-button"
          onClick={() => this.props.onComplete(this.props.todo.id)}
        />
      );
    } else {
      return (
        <div
          className="todo-list__complete-button"
          onClick={() => this.props.onUncomplete(this.props.todo.id)}
        />
      );
    }
  }
}

export default TodoItem;
