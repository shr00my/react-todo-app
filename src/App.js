import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      todoList: [
        {
          title: "learn React",
          done: false
        },
        {
          title: "create a todo with react",
          done: false
        }
      ]
    };
  }

  onInputChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  toggleTodoDone(event, index) {
    const todoList = [...this.state.todoList]; // Copy the array from the state
    todoList[index] = {
      ...todoList[index],
      done: event.target.checked // update done property on copied todo
    }; // copy the todo can also use Object.assign

    this.setState({
      todoList
    });
  }

  handleSumbit(event) {
    event.preventDefault();
    this.setState({
      inputText: "",
      todoList: [
        ...this.state.todoList,
        {
          title: this.state.inputText,
          done: false
        }
      ]
    });
    console.log(this.state.todoList);
  }

  allDone() {
    const todoList = this.state.todoList.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todoList
    });
  }

  removeTodo(index) {
    const todoList = [...this.state.todoList]; // Copy the array from the state
    todoList.splice(index, 1);
    this.setState({
      todoList
    });
  }

  render() {
    return (
      <div>
        <TodoForm
          handleSumbit={this.handleSumbit.bind(this)}
          onInputChange={this.onInputChange.bind(this)}
          inputText={this.state.inputText}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todoList={this.state.todoList}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
