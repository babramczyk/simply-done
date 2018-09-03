import React, { Component } from "react";
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";
import TodosTabs from "../TodosTabs/TodosTabs";
import "./Todos.css";

const TABS = {
  uncompleted: 0,
  completed: 1
};

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      activeTab: TABS.uncompleted
    };
  }

  render() {
    return (
      <div className="todos">
        <CreateTodo onAdd={text => this.handleTodoAdd(text)} />

        <TodosTabs tabs={this.getTabs()} />

        <TodoList
          todos={this.getShownTodos()}
          onTodoToggle={id => this.handleTodoToggle(id)}
        />
      </div>
    );
  }

  // =======
  // Getters
  // =======

  getTabs() {
    return [
      {
        key: TABS.uncompleted,
        title: "Uncompleted",
        onClick: () => this.setActiveTab(TABS.uncompleted)
      },
      {
        key: TABS.completed,
        title: "Completed",
        onClick: () => this.setActiveTab(TABS.completed)
      }
    ];
  }

  getUncompletedTodos() {
    return this.state.todos.filter(todo => !todo.completed);
  }

  getCompletedTodos() {
    return this.state.todos.filter(todo => todo.completed);
  }

  getShownTodos() {
    return this.state.todos.filter(
      todo => todo.completed === (this.state.activeTab === TABS.completed)
    );
  }

  // ======
  // Setters
  // =======

  setActiveTab(tab) {
    this.setState({ activeTab: tab });
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
