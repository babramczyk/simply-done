import React, { Component } from "react";
import CreateTodo from "./CreateTodo";
import TodosList from "./TodosList";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  handleTodoAdd(text) {
    this.setState((prevState, props) => {
      const todos = prevState.todos;
      todos.push({
        text: text,
        id: prevState.todos.length
      });
      return {
        todos: todos
      };
    });
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo onAdd={text => this.handleTodoAdd(text)} />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default Todos;