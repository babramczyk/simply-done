import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return <li className="todos-list__item">{this.props.text}</li>;
  }
}

export default TodoItem;
