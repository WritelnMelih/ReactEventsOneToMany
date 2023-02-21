import React from "react";

export class Calculator extends React.Component {
  state = {
    firstNumber: "",
    secondNumber: "",
    operation: "",
    result: "",
  };

  buttonHandler = (event) => {
    if (event.target.innerHTML == "RESET") {
      this.setState({
        firstNumber: "",
        secondNumber: "",
        operation: "",
        result: "",
      });
    } else if (
      event.target.innerHTML == "=" &&
      this.state.firstNumber &&
      this.state.secondNumber
    ) {
      let first = Number(this.state.firstNumber);
      let second = Number(this.state.secondNumber);
      switch (this.state.operation) {
        case "+":
          this.setState({
            result: first + second,
          });
          break;
        case "-":
          this.setState({
            result: first - second,
          });
          break;
        case "*":
          this.setState({
            result: first * second,
          });
          break;
        case "/":
          this.setState({
            result: first / second,
          });
          break;
      }
    } else if (!isNaN(event.target.innerHTML)) {
      if (this.state.operation == "") {
        this.setState({
          firstNumber: this.state.firstNumber + event.target.innerHTML,
        });
      } else {
        this.setState({
          secondNumber: this.state.secondNumber + event.target.innerHTML,
        });
      }
    } else {
      this.setState({
        operation: event.target.innerHTML,
      });
    }
  };
  render() {
    return (
      <div className="calculatorContainer">
        <div className="display">
          <div>{this.state.firstNumber}</div>
          <div>{this.state.operation}</div>
          <div>{this.state.secondNumber}</div>
          <div>{this.state.result ? "=" : ""}</div>
          <div>{this.state.result}</div>
        </div>
        <div className="row">
          <button onClick={this.buttonHandler}>1</button>
          <button onClick={this.buttonHandler}>2</button>
          <button onClick={this.buttonHandler}>3</button>
        </div>
        <div className="row">
          <button onClick={this.buttonHandler}>4</button>
          <button onClick={this.buttonHandler}>5</button>
          <button onClick={this.buttonHandler}>6</button>
        </div>
        <div className="row">
          <button onClick={this.buttonHandler}>7</button>
          <button onClick={this.buttonHandler}>8</button>
          <button onClick={this.buttonHandler}>9</button>
        </div>
        <div className="row">
          <button onClick={this.buttonHandler}>0</button>
          <button onClick={this.buttonHandler}>+</button>
          <button onClick={this.buttonHandler}>-</button>
        </div>
        <div className="row">
          <button onClick={this.buttonHandler}>*</button>
          <button onClick={this.buttonHandler}>/</button>
          <button onClick={this.buttonHandler}>=</button>
        </div>
        <button onClick={this.buttonHandler}>RESET</button>
      </div>
    );
  }
}
