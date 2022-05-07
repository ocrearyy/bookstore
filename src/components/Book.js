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
    <div>
      <div className="book-preview">
        <h2>{ book.title }</h2>
        <p>{ book.author }</p>
        <button onClick={() => removeHandler(book.id)} type="button">remove</button>
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
