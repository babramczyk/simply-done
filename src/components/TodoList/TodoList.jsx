import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
  render() {
    return <ul className="todos-list">{this.renderTodos()}</ul>;
  }

  renderTodos() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={this.props.onTodoToggle}
        />
      );
    });
  }
}

export default TodoList;
