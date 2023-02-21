import React, { Component } from "react";

export class Todo extends Component {
  state = {
    task: "",
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  buttonHandler = (event) => {
    if (!this.state.task) {
      alert("Task can't be empty!");
    } else {
      let item = document.createElement("li");
      item.innerHTML = this.state.task;
      document.getElementById(event.target.name).appendChild(item);
      this.setState({
        task: "",
      });
    }
  };
  render() {
    return (
      <div className="todoContainer">
        <input
          name="task"
          placeholder="Enter a task..."
          value={this.state.task}
          onChange={this.inputHandler}
        ></input>
        <div className="columnContainer">
          <div>
            <h1>Today</h1>
            <button name="today" onClick={this.buttonHandler}>
              Add
            </button>
            <ul id="today"></ul>
          </div>
          <div>
            <h1>Tomorrow</h1>
            <button name="tomorrow" onClick={this.buttonHandler}>
              Add
            </button>
            <ul id="tomorrow"></ul>
          </div>
          <div>
            <h1>Next Day</h1>
            <button name="nextDay" onClick={this.buttonHandler}>
              Add
            </button>
            <ul id="nextDay"></ul>
          </div>
        </div>
      </div>
    );
  }
}
