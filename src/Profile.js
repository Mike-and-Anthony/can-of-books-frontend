import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <>
      <h1>This is the Profile Page</h1>
      <h2>Lorum Ipsum UserNameum</h2>
      <h2>Lorum Ipsum Emailsum</h2> 
      <p>Number of books logged</p>
      </>
    );
  }
};

export default Profile;