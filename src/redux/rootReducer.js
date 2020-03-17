import { combineReducers } from "redux";
import weatherReducer from "./weather/weather-reducer";
import SearchReducer from "./search/search-reducer";
export default combineReducers({
  weather: weatherReducer,
  search: SearchReducer
});
