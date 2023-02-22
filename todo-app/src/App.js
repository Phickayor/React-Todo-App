import React, { Component } from "react";
import Todos from "./Todos";
import "./App.css";
import AddTodo  from "./Addtodo";

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy some milk"},
      {id: 2, content: "Buy some Biscuit"}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState ({
      todos
    })
  }
  addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo]
      this.setState({
        todos
      })
  }
  render() {
  return (
    <div className="App container">
        <h1 className="text-center text-primary display-1">Todo's</h1>
        <AddTodo addTodo={this.addTodo}/> <br/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>       
    </div>
  );
}
}

export default App;
