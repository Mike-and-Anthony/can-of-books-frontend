import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email:'',
    }
  }

  loginHandler = (user, email) => {
    console.log(user, email)
    this.setState({
      user: user,
      email: email,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: '',
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user? <BestBooks/> : <Login loginHandler={this.loginHandler}/>};
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route path = "/Profile">
              {this.state.user? <Profile/>: ''}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;