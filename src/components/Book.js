import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { lessBooks } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const removeHandler = (id) => {
    dispatch(lessBooks(id));
  };
  return (
    <div className="book-card book-list">
      <div className="book-preview">
        <p className="category">General</p>
        <h2 className="book-title">{ book.title }</h2>
        <p className="book-author">{ book.author }</p>
        <button className="btn" type="button">Comments</button>
        <button className="btn" onClick={() => removeHandler(book.id)} type="button">Remove</button>
        <button className="btn" type="button">Edit</button>
      </div>
      <div className="progress-col">
        <div className="progress" />
        <div className="progress-detail">
          <h3 className="percent">25%</h3>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="chap-col">
        <p className="current-chap">Current chapter</p>
        <p className="chap">
          Chapter
          <span>
            {Math.floor(Math.random() * 16)}
          </span>
        </p>
        <button className="progress-btn" type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = ({
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
}).isRequired;

export default Book;
