import React from "react";
export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="loginContainer">
          <label className="loginLabels">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.inputHandler}
          ></input>
          <label className="loginLabels">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.inputHandler}
          ></input>
          <button disabled={!this.state.username || !this.state.password}>
            Sign In
          </button>
          <div className="loginAlternative">
            <div>Sign Up</div>
            <div>Forgot password?</div>
          </div>
        </div>
      </div>
    );
  }
}
