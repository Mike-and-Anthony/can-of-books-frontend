import { Component } from "react";

class LogoutButton extends Component {

  render() {
    return (
      <button className="loginButton" onClick={this.props.onLogout}>
        Log Out
      </button>
    );
  }
};

export default LogoutButton;