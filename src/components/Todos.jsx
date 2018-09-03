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
      completed: false,
      text: text,
      id: todos.length
    });
    this.setState({
      todos: todos
    });
  }

  handleTodoToggle(id) {
    const todos = [...this.state.todos];
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo onAdd={text => this.handleTodoAdd(text)} />
        <TodoList
          todos={this.state.todos}
          onTodoToggle={id => this.handleTodoToggle(id)}
        />
      </div>
    );
  }
}

export default Todos;
