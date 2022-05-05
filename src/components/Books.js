import '../App.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import Input from './input';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />))}
      <Input />
    </div>
  );
};

export default Books;
