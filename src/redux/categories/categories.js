const CHECK_STATUS = 'CHECK_STATUS';

export const lookAtStatus = () => ({
  type: CHECK_STATUS,
});

const statusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS: { return 'Under construction '; }
    default: state;
  }
};

export default statusReducer;
