import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodosList extends Component {
  render() {
    return <ul className="todos-list">{this.renderTodos()}</ul>;
  }

  renderTodos() {
    return this.props.todos.map(todo => {
      return <TodoItem todo={todo} key={todo.id} />;
    });
  }
}

export default TodosList;
