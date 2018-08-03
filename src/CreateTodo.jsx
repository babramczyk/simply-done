import React, { Component } from "react";

class CreateTodo extends Component {
  render() {
    return (
      <form className="create-todo" onSubmit={e => this.handleSubmit(e)}>
        <input type="text" />
        <input type="submit" value="Add" />
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd("hey");
  }
}

export default CreateTodo;
