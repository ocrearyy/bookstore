const ADD_BOOK = 'BOOK_ADDED';
const REMOVE_BOOK = 'BOOK_REMOVED';

export const moreBooks = () => ({
  type: ADD_BOOK,
});

export const lessBooks = () => ({
  type: REMOVE_BOOK,
});

const bookReducer = (state = [], action) => {
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
    default:
      return state;
  }
};

export default bookReducer;
