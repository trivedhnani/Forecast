import React from "react";
import "./info-styles.css";
const Information = ({ info }) => {
  // const fahrenheitFactor=
  return (
    <div>
      <b>{info["weather"][0]["description"].toUpperCase()}</b>
      <p>Temperature: {info["main"]["temp"]}F</p>
      <p>Min: {info["main"]["temp_min"]} F</p>
      <p>Max: {info["main"]["temp_max"]} F</p>
      {info["snow"] ? <p>Snow: {info["snow"]["3h"]}</p> : null}
      {info["rain"] ? <p>Rain: {info["rain"]["3h"]}</p> : null}
    </div>
  );
};
export default Information;
