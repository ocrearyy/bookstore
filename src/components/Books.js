import { useState } from 'react';
import '../App.css';

const Books = () => {
  const [books, displayBook] = useState([
    { title: 'The Hunger Games1', author: 'Suzanne Collins1', id: 1 },
    { title: 'The Hunger Games2', author: 'Suzanne Collins2', id: 2 },
    { title: 'The Hunger Games3', author: 'Suzanne Collins3', id: 3 },    
  ]);

  return (
    <div className="book">
      {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <h2>{ book.title }</h2>
          <p>{ book.author }</p>
          <button type="button">remove</button>
        </div>
      ))}
    </div>
  );
};

export default Books;
