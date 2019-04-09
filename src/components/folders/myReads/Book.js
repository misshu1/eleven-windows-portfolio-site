import React from "react";
import PropTypes from "prop-types";

const Book = props => {
    const { book, bookShelf } = props;

    //Fix the books with no image and no authors
    const thumbnail = book.imageLinks
        ? book.imageLinks.smallThumbnail
        : "https://via.placeholder.com/128x193?text=NoImage";
    const authors = book.authors ? book.authors : "Unspecified authors";

    return (
        <li>
            <img src={thumbnail} alt={thumbnail} />
            <div className="select-container">
                <select
                    onChange={e => bookShelf(book, e.target.value)}
                    value={book.shelf}
                >
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
            <div className="book-details">
                <span>{book.title}</span>
                <span>{authors}</span>
            </div>
        </li>
    );
};

Book.prototype = {
    book: PropTypes.array.isRequired,
    bookShelf: PropTypes.func.isRequired
};

export default Book;
