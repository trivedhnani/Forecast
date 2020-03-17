const INITIAL_STATE = {
  search: "Boston"
};
const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};
export default SearchReducer;
