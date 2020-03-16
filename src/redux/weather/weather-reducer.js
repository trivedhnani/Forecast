const INITIAL_STATE = {
  list: []
};
const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};
export default weatherReducer;
