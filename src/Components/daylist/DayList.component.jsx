import React from "react";
import Day from "../day/Day-component";
import Information from "../Information/info-component";
import { withRouter } from "react-router-dom";
const DayList = ({ weatherList, history, ...otherProps }) => {
  return weatherList.map(day => {
    const id = weatherList.indexOf(day) + 1;
    return (
      <Day
        key={id}
        onClick={() => history.push(`/forecast/${id}`)} //id should be replaced by date of the day
        img={`http://openweathermap.org/img/wn/${day[0]["weather"][0]["icon"]}@2x.png`}
      >
        <p>{day[0]["dt_txt"].split(" ")[0]}</p>
        <Information info={day[0]} />
      </Day>
    );
  });
};
export default withRouter(DayList);
