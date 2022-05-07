import '../App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Input from './input';
import { updateInitialBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(updateInitialBooks());
  }, []);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />))}
      <Input />
    </div>
  );
};

export default Books;
