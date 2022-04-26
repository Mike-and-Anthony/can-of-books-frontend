import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';


class BookFormModal extends React.Component {

  handleBookShelf = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      email: e.target.email.value,
      status: e.target.status.checked
    }
    this.props.addBook(newBook);
    this.props.onHide();
  }
  render() {

    return (
      <Container className="mt-5">
        <Form onSubmit={this.handleBookShelf}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Check type="checkbox" label="I have read this book" />
          </Form.Group>
          <Button className="loginButton" type="submit" >Add Book to my Shelf</Button>
        </Form>
      </Container>
    );
  }
};


export default BookFormModal