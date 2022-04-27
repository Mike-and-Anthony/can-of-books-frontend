import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';


class BookUpdateModal extends React.Component {

  handleUpdate = (e) => {
    e.preventDefault();
    let editedBook = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      email: e.target.email.value|| this.props.book.email,
      status: e.target.status.checked,
      _id: this.props.book._id,
      __v: this.props.book.__v,
    }
    this.props.updateBook(editedBook);
    this.props.onHide();
  }
  render() {

    return (
      <Container className="mt-5">
        <Form onSubmit={this.handleUpdate}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.title}/>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.description}/>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder={this.props.book.email}/>
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Check type="checkbox" label="I have read this book" />
          </Form.Group>
          <Button className="loginButton" type="submit">Edit Book Info</Button>
        </Form>
      </Container>
    );
  }
};


export default BookUpdateModal