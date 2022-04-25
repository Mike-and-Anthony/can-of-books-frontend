import { Component } from 'react'
import LoginForm from './LoginForm'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  };
  handleModal = () => {
    this.setState({
      modal: true,
    })
  };
  render() {
    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <>
      <Button onClick={this.handleModal}>Log In</Button>

      <Modal show = {this.state.modal}
      >        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
      <LoginForm loginHandler={this.props.loginHandler}/>
      </Modal>
      </>
    )
  }
}