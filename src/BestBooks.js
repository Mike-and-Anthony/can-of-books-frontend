import React from 'react';
import axios from 'axios';
import { Carousel, Button, CarouselItem, Modal } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import Book from './Book';
import './BestBooks.css';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookformModal: false,
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  fetchBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`
      console.log(url)
      const response = await axios.get(url)
        ;
      console.log(response);
      this.setState({
        books: response.data
      })
      console.log(this.state.books)
    } catch (error) {
      console.log('error', error.response)
    }
  }

  burnBook = async (id) => {
    console.log(id);
    try{
      await axios.delete(`${process.env.REACT_APP_SERVER}/books/${id}`);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState ({
        books: updatedBooks,
      })
    }catch(error){
      console.log(error.response)
    }
  }

  addBook = async (newBook) => {
    try {
      console.log(newBook)
      let requestConfig ={
        url:'/books',
        baseURL:process.env.REACT_APP_SERVER,
        method:'post',
        data:newBook
        }
      // let createdBook = await axios.post(`${process.env.REACT_APP_SERVER}/books`, newBook);
      let createdBook = await axios(requestConfig)
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log(error.response)
    }
  }

updateBook = async (bookToUpdate)=> {
  try{
    let freshBook = await axios.put(`${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`, bookToUpdate);
  let updatedBookData = this.state.books.map(currentBooks => {
    return currentBooks._id === bookToUpdate._id ? freshBook.data : currentBooks;
  })
  this.setState({books: updatedBookData})
  } catch(error) {
    console.log(error.message);
  }
}

  showForm = () => {
    this.setState({
      bookformModal: true,
    })
  }
  onHide = () => {
    this.setState({
      bookformModal: false,
    })
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {

    /* TODO: render user's books in a Carousel */
    let carouselItems = this.state.books.map(book => (
      <Carousel.Item className="carouselItem" key={book._id}>
        <Book 
          book = {book}
          burnBook = {this.burnBook}
          updateBook = {this.updateBook}
        />
      </Carousel.Item>
    ))

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel interval={null} >
            {carouselItems}
            <CarouselItem className="carouselContainer">
              <Button className="addBookButton" onClick={this.showForm}>Add New Book</Button>
            </CarouselItem>
          </Carousel>

        ) : (
          <>
            <h3>No Books Found :(</h3>
            <Button className="addBookButton" onClick={this.showForm}>Add New Book</Button>
          </>
        )}
        <Modal show={this.state.bookformModal} onHide={this.onHide}>
          <Modal.Header className="modal-head"closeButton>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>
          <BookFormModal
            addBook={this.addBook} onHide={this.onHide} />
        </Modal>
      </>
    )
  }
}

export default BestBooks;