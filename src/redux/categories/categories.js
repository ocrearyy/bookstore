const CHECK_STATUS = 'categories/CHECK_STATUS';

export const lookAtStatus = () => ({
  type: CHECK_STATUS,
});

const statusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS: { return 'Under construction '; }
    default:
      return state;
  }
};

export default statusReducer;
