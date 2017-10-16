const DataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CAREERS':
      return action.payload;
    default:
      return state;
  }
};

export default DataReducer;
