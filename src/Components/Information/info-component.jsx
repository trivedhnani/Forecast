import React from "react";
import "./info-styles.css";
const Information = ({ info }) => {
  return (
    <div>
      <b>{info["weather"][0]["description"].toUpperCase()}</b>
      <p>Temperature: {info["main"]["temp"]}</p>
      <p>Min: {info["main"]["temp_min"]}</p>
      <p>Max: {info["main"]["temp_max"]}</p>
      {info["snow"] ? <p>Snow: {info["snow"]["3h"]}</p> : null}
      {info["rain"] ? <p>Rain: {info["rain"]["3h"]}</p> : null}
    </div>
  );
};
export default Information;
