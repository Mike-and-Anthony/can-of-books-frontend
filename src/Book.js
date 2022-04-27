import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import BookUpdateModal from './BookUpdateModal';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookUpdateModal: false,
    }
  }
  
  showUpdateForm = () => {
    this.setState({
      bookUpdateModal: true,
    })
  }
  onHide = () => {
    this.setState({
      bookUpdateModal: false,
    })
  }

  render() {
    return (
      <>
      <div className="carouselContainer">
      <p>{this.props.book.title}</p>
      <p>{this.props.book.description}</p>

          <Modal show= {this.state.bookUpdateModal} onHide ={this.onHide}>
          <Modal.Header className="modal-head"closeButton>
            <Modal.Title>Update a Book</Modal.Title>
          </Modal.Header>
          <BookUpdateModal
          book = {this.props.book}
          updateBook = {this.props.updateBook}
          onHide = {this.onHide}/> 
          </Modal>

      <Button onClick={() => this.showUpdateForm()}>Update Book</Button>
      <Button className="burn" onClick={() => this.props.burnBook(this.props.book._id)}>Burn The Book!</Button>

      </div>


      </>
    )
  }
  
}

export default Book;