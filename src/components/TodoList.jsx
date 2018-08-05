import React, { Component } from "react";
import TodoItem from "./TodoItem";

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
          onComplete={this.props.onTodoComplete}
          onUncomplete={this.props.onTodoUncomplete}
        />
      );
    });
  }
}

export default TodoList;
