import { v4 as uuidv4 } from 'uuid';
import { getBooks, AddBook, removeBook } from '../../API/Api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/BOOK_REMOVED';

// this is a function that return another function which will
// be consumed by the Thunk inside middleware performance
// action creator...
export const updateInitialBooks = () => (dispatch) => {
  getBooks().then((data) => {
    const result = Object.entries(data).map((data) => {
      let [, res] = data;
      [res] = res;
      [res.id] = data;
      return (res);
    });
    dispatch({ type: ADD_BOOK, payload: result });
  });
};

export const moreBooks = (title, author) => (dispatch) => {
  const book = {
    title, author, item_id: uuidv4(), category: 'Not set',
  };
  AddBook(book).then((result) => {
    if (result.ok) dispatch({ type: ADD_BOOK, payload: [{ ...book, id: book.item_id }] });
  });
};

export const lessBooks = (id) => (dispatch) => {
  removeBook(id).then((result) => {
    console.log(result);
    if (result.ok) dispatch({ type: REMOVE_BOOK, payload: id });
  }); console.log(id);
};

const defaultState = [];

const bookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      ...action.payload,
    ];

    case REMOVE_BOOK: return [
      ...state.filter((book) => (book.id !== action.payload)),
    ];
    default:
      return state;
  }
};

export default bookReducer;
