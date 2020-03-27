import React from "react";
import { connect } from "react-redux";
import "./forecast-styles.css";
import Day from "../../Components/day/Day-component";
import Information from "../../Components/Information/info-component";
const Forecast = ({ match, weather, ...props }) => {
  const day = match.params.day;
  let hourlyTemp = [];
  weather.forEach(el => {
    if (day === el[0]["dt_txt"].split(" ")[0]) {
      hourlyTemp = [...hourlyTemp, ...el];
    }
  });

  return (
    <div className="comp">
      {hourlyTemp.map((hour, index) => (
        <Day
          key={index}
          img={`http://openweathermap.org/img/wn/${hour["weather"][0]["icon"]}@2x.png`}
        >
          <p>{hour["dt_txt"].split(" ")[1]}</p>
          <Information info={hour} />
        </Day>
      ))}
    </div>
  );
};
const mapStateToProps = state => ({
  weather: state.weather.list
});
export default connect(mapStateToProps)(Forecast);
