import React from "react";
import logo from "../../logo.svg";
import "./Day-styles.css";
// import logo from ''
const Day = props => (
  <span {...props}>
    <img src={logo} width="200px" height="200px" alt="current weather" />
    <p>Current weather</p>
  </span>
);
export default Day;
