import React from "react";
import { connect } from "react-redux";
import "./forecast-styles.css";
import Day from "../../Components/day/Day-component";
const Forecast = ({ match, weather, ...props }) => {
  const hourlyTemp = weather[match.params.day - 1];
  return (
    <div className="comp">
      {hourlyTemp.map((hour, index) => (
        <Day key={index}></Day>
      ))}
    </div>
  );
};
const mapStateToProps = state => ({
  weather: state.weather.list
});
export default connect(mapStateToProps)(Forecast);
