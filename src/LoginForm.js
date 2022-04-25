import { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        email:'',
      }
  };

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    let onChangeHandle = (event) => {
      let name = event.target.name;
      let val = event.target.value;
      console.log({[name]: val})
      this.setState({ [name]: val });
    }
    let submitFunction = (e) => {
      e.preventDefault();
      let a = this.state.user
      let b = this.state.email
      console.log(a);
      this.props.loginHandler(a,b)
    }

    return (
      <form>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>User Name</label>
          <input type="text" name="user" className="form-control" placeholder="Enter User Name" onChange={onChangeHandle} />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input type="email" name="email" className="form-control" placeholder="Enter E-Mail" onChange={onChangeHandle} />
        </div>
        <button className="btn btn-primary btn-block" onClick={submitFunction}>Submit</button>
      </form>
    );
  }
};

export default LoginForm;