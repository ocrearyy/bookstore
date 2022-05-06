import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import statusReducer from './categories/categories';


const rootReducer = combineReducers({
  books: bookReducer,
  categories: statusReducer,
});

// eslint-disable-next-line no-unused-vars
const store = createStore(rootReducer);

export default store(applyMiddleware(thunk));
