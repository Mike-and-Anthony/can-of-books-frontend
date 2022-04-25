import React from 'react';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      // showUpdateModal: false,
    };
    this.closeModal = this.closeModal.bind();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const bookMaker = {
      title: e.target.title.value,
      description: e.target.description.value,
      read: e.target.read.value,
      email: e.target.email.value,
    };
    console.log(bookMaker);
    this.makeBook(bookMaker);
    // e.target.reset()
  };

  handleClick = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    let url = `${process.env.REACT_APP_LOCALHOST}/books?`;
    if (this.props.user) {
      url = `${process.env.REACT_APP_LOCALHOST}/books?email=${this.props.user.email}`;
    }
    try {
      let result = await axios.get(url);
      console.log(result)
      console.log("result", result.data);
      this.setState({ books: result.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  deleteBook = async (id) => {
    console.log('id in deleteBook: ', id)
    try {
      await axios.delete(`${process.env.REACT_APP_LOCALHOST}/books/${id}?email=${this.props.user.email}`);

      const updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({ books: updatedBooks });
    } catch (e) {
      console.error(e);
    }
  };

  postBook = async (userBook) => {
    try {
      const bookResponse = await axios.post(process.env.REACT_APP_LOCALHOST + '/books', userBook);
      this.setState({ books: [...this.state.books, bookResponse.data] });
    } catch (e) {
      console.error(e);
    }
  };

  updateBook = async (updatedBook, id) => {
    console.log('updatedBook: ', updatedBook)
    console.log('id: ', id)
    // this.setState({showUpdateModal: true})

    try {
      const updateBook = await axios.put(`${process.env.REACT_APP_LOCALHOST}/books/${id}${updatedBook}`);
      // const updateBook = await axios.put(`${process.env.REACT_APP_LOCALHOST}/books/${updatedBook}`);
      const newBookState = this.state.books.map(book => {
        if (book._id === id) {
          return updateBook.data;
        }
        return book;
      })
      this.setState({ books: newBookState })
    } catch (e) {
      console.error(e)
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>Michael and Anthony's Digital Book Emporium </h2>

        {this.state.books.length ? (
          <BookCarousel deleteBook={this.deleteBook} books={this.state.books} updateBook={this.updateBook} showModal={this.state.showModal} onClick={this.handleClick} closeModal={this.closeModal} postBook={this.postBook} />
        ) : (
          <p>Sorry, there are no books in this collection</p>
        )}
        {this.state.showModal ? (
          <BookFormModal showModal={this.state.showModal} onClick={this.handleClick} closeModal={this.closeModal} postBook={this.postBook} />
        ) : (
          <Button onClick={this.handleClick}>Add a book</Button>
        )}


      </>
    )
  }
}

export default BestBooks;
