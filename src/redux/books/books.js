const ADD_BOOK = 'BOOK_ADDED';
const REMOVE_BOOK = 'BOOK_REMOVED';

export const moreBooks = () => {
  return {
    type: ADD_BOOK
  }
}

export const lessBooks = () => {
  return {
    type: REMOVE_BOOK
  }
}

export default bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      {
        id: 1,
        title: 'Title',
        author: 'Oshane',
      },
    ];

    case REMOVE_BOOK: return [
      ...state,
      {
        id: '',
        title: '',
        author: '',
      },
    ];
    default: state;
  }
};
