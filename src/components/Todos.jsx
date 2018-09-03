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

  render() {
    return (
      <div className="todos">
        <CreateTodo onAdd={text => this.handleTodoAdd(text)} />
        
        <h2>Uncompleted</h2>
        <TodoList
          todos={this.getUncompletedTodos()}
          onTodoToggle={id => this.handleTodoToggle(id)}
        />
        <h2>Completed</h2>
        <TodoList
          todos={this.getCompletedTodos()}
          onTodoToggle={id => this.handleTodoToggle(id)}
        />
      </div>
    );
  }

  // =======
  // Getters
  // =======

  getUncompletedTodos() {
    return this.state.todos.filter(todo => !todo.completed);
  }

  getCompletedTodos() {
    return this.state.todos.filter(todo => todo.completed);
  }

  // ========
  // Handlers
  // ========

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
}

export default Todos;
