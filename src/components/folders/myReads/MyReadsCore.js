import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import AddBook from "./AddBook";
import escapeRegExp from "escape-string-regexp";
import { SearchIcon, Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MyReadsCore extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
        showAddBookPage: false
    };

    addBooksClickToggle = () => {
        this.setState({ showAddBookPage: !this.state.showAddBookPage });
    };

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        BooksAPI.getAll().then(books => {
            const matchCR = new RegExp(escapeRegExp("currentlyReading"));
            let currentlyReading = books
                ? books.filter(book => matchCR.test(book.shelf))
                : null;

            const matchWR = new RegExp(escapeRegExp("wantToRead"));
            let wantToRead = books
                ? books.filter(book => matchWR.test(book.shelf))
                : null;

            const matchR = new RegExp(escapeRegExp("read"));
            let read = books
                ? books.filter(book => matchR.test(book.shelf))
                : null;

            this.setState({ currentlyReading, wantToRead, read });
        });
    };

    bookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => this.getBooks());
    };

    renderShelf = (books, title) => {
        return (
            <React.Fragment>
                <h2>{title}</h2>
                <ol>
                    {books.map((book, index) => (
                        <Book
                            key={index}
                            book={book}
                            bookShelf={this.bookShelf}
                        />
                    ))}
                </ol>
            </React.Fragment>
        );
    };

    render() {
        const {
            currentlyReading,
            wantToRead,
            read,
            showAddBookPage
        } = this.state;

        return (
            <Container>
                {showAddBookPage === true ? (
                    <AddBook addBooksClickToggle={this.addBooksClickToggle} />
                ) : (
                    <React.Fragment>
                        {this.renderShelf(
                            currentlyReading,
                            "Currently Reading"
                        )}
                        {this.renderShelf(wantToRead, "Want to Read")}
                        {this.renderShelf(read, "Read")}

                        <SearchIcon onClick={() => this.addBooksClickToggle()}>
                            <FontAwesomeIcon icon="plus" size="lg" />
                        </SearchIcon>
                    </React.Fragment>
                )}
            </Container>
        );
    }
}

export default MyReadsCore;
