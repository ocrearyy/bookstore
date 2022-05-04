import Redux from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
  bookReducer,
  statusReducer,
});

// eslint-disable-next-line no-unused-vars
const store = Redux.createStore(rootReducer);
