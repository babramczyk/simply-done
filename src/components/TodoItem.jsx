import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li className="todos-list__item">
        {this.props.todo.text}
        <button onClick={() => this.props.onComplete(this.props.todo.id)}>Complete</button>
      </li>
    );
  }
}

export default TodoItem;
