import React, { Component } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  handleTodoAdd(text) {
    const todos = [...this.state.todos];
    todos.push({
      text: text,
      id: todos.length
    });
    this.setState({
      todos: todos
    });
  }

  handleTodoComplete(id) {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo onAdd={text => this.handleTodoAdd(text)} />
        <TodoList
          todos={this.state.todos}
          onTodoComplete={id => this.handleTodoComplete(id)}
        />
      </div>
    );
  }
}

export default Todos;
