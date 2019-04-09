import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddBook extends Component {
    state = {
        books: [],
        query: "",
        selectedBooks: [],
        searchTerms: [
            "Android",
            "Art",
            "Artificial Intelligence",
            "Astronomy",
            "Austen",
            "Baseball",
            "Basketball",
            "Bhagat",
            "Biography",
            "Brief",
            "Business",
            "Camus",
            "Cervantes",
            "Christie",
            "Classics",
            "Comics",
            "Cook",
            "Cricket",
            "Cycling",
            "Desai",
            "Design",
            "Development",
            "Digital Marketing",
            "Drama",
            "Drawing",
            "Dumas",
            "Education",
            "Everything",
            "Fantasy",
            "Film",
            "Finance",
            "First",
            "Fitness",
            "Football",
            "Future",
            "Games",
            "Gandhi",
            "Homer",
            "Horror",
            "Hugo",
            "Ibsen",
            "Journey",
            "Kafka",
            "King",
            "Lahiri",
            "Larsson",
            "Learn",
            "Literary Fiction",
            "Make",
            "Manage",
            "Marquez",
            "Money",
            "Mystery",
            "Negotiate",
            "Painting",
            "Philosophy",
            "Photography",
            "Poetry",
            "Production",
            "Programming",
            "React",
            "Redux",
            "River",
            "Robotics",
            "Rowling",
            "Satire",
            "Science Fiction",
            "Shakespeare",
            "Singh",
            "Swimming",
            "Tale",
            "Thrun",
            "Time",
            "Tolstoy",
            "Travel",
            "Ultimate",
            "Virtual Reality",
            "Web Development",
            "iOS"
        ]
    };

    updateQuery = query => {
        BooksAPI.search(query).then(books =>
            books ? this.setState({ books }) : []
        );
        this.setState({ query });
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            const booksId = books.map(book => ({
                id: book.id,
                shelf: book.shelf
            }));
            this.setState({ selectedBooks: booksId });
        });
    }

    bookShelf = (book, shelf) => {
        const newBooks = [];
        BooksAPI.update(book, shelf)
            .then(books => {
                Object.keys(books).forEach(shelf => {
                    return books[shelf]
                        .map(id => ({ id: id, shelf: shelf }))
                        .forEach(book => {
                            newBooks.push(book);
                        });
                });
                return newBooks;
            })
            .then(newBooks => {
                this.setState({ selectedBooks: newBooks });
            });
    };

    searchBook() {
        if (this.state.query) {
            return this.state.books.error ? (
                <div className="search-help">
                    <p>Use the keywords below to find a book</p>
                    <p>{this.state.searchTerms.join(", ")}</p>
                </div>
            ) : (
                this.state.books.map((book, index) => {
                    return (
                        <Book
                            key={index}
                            book={book}
                            bookShelf={this.bookShelf.bind(this)}
                        />
                    );
                })
            );
        }
    }

    render() {
        const { books, selectedBooks } = this.state;

        if (books.length > 0) {
            books.map((book, index) => {
                selectedBooks.forEach(cbook => {
                    if (cbook.id === book.id) {
                        book.shelf = cbook.shelf;
                    }
                });

                return (
                    <React.Fragment key={index}>
                        <Book bookShelf={this.bookShelf} book={book} />
                    </React.Fragment>
                );
            });
        }

        return (
            <React.Fragment>
                <div className="search-books-bar">
                    <span onClick={() => this.props.addBooksClickToggle()}>
                        <FontAwesomeIcon icon="arrow-left" size="lg" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={event => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className="add-book-result">{this.searchBook()}</ol>
            </React.Fragment>
        );
    }
}

export default AddBook;
