import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
fetchBooks = async () => {
  try{
    let url = `${process.env.REACT_APP_SERVER}/books`
    console.log(url)
    const response = await axios.get(url)
      ;
      console.log(response);
      this.setState({
        books: response.data
      })
      console.log(this.state.books)
  } catch(error) {
    console.log('error', error.response)
  }
}

componentDidMount(){
  this.fetchBooks();
}

  render() {

    /* TODO: render user's books in a Carousel */
    let carouselItems = this.state.books.map(book => (
      <Carousel.Item key={book._id}>
        <p>{book.title}</p>
        <p>{book.description}</p>
      </Carousel.Item>
    ))

    return (
      <>
        <h2>Anthony and Michaels Lifelong learning and reading emporium</h2>

        {this.state.books.length ? (
          <Carousel>
              {carouselItems}
            </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;