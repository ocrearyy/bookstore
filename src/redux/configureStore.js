import bookReducer from './books'
import statusReducer from './categories'


const rootReducer = Redux.combineReducers({
  bookReducer,
  statusReducer
});

const store = Redux.createStore(rootReducer);