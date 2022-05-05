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
    <div>
      <form onSubmit={handleSubmission}>
        <input id="title" type="text" placeholder="title" />
        <input id="author" type="text" placeholder="author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Input;
