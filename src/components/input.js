import React from 'react';
import { useDispatch } from 'react-redux';
import { moreBooks } from '../redux/books/books';

const Input = () => {
  const dispatch = useDispatch();
  const handleSubmission = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    if (title !== '' && author !== '') {
      dispatch(moreBooks(title, author));
    }
  };
  return (
    <div className="input-book">
      <h1 className="input-h1">ADD NEW BOOK</h1>
      <form onSubmit={handleSubmission}>
        <input className="input-field" id="title" type="text" size="60" placeholder="Book Title" />
        <input className="input-field" id="author" type="text" size="40" placeholder="Author" />
        <button className="submit-btn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Input;
