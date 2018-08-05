import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li
        className={`todo-list__item ${
          this.props.todo.completed ? "todo-list__item--completed" : ""
        }`}
      >
        {this.props.todo.text}
        {this.renderButton()}
      </li>
    );
  }

  renderButton() {
    var isCompleted = this.props.todo.completed;
    if (!isCompleted) {
      return (
        <button onClick={() => this.props.onComplete(this.props.todo.id)}>
          Complete
        </button>
      );
    } else {
      return (
        <button onClick={() => this.props.onUncomplete(this.props.todo.id)}>
          Uncomplete
        </button>
      );
    }
  }
}

export default TodoItem;
