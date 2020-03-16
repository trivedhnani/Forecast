import { combineReducers } from "redux";
import weatherReducer from "./weather/weather-reducer";
export default combineReducers({
  weather: weatherReducer
});
