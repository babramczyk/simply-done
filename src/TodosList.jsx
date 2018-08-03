import React, { Component } from "react";

class TodosList extends Component {
  render() {
    return <ul className="todos-list">{this.renderTodos()}</ul>;
  }

  renderTodos() {
    return this.props.todos.map(renderTodo);
  }
}

function renderTodo(todo, index) {
  return (
    <li className="todos-list__item" key={index}>
      {todo}
    </li>
  );
}

export default TodosList;
