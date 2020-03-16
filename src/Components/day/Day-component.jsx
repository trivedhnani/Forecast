import React from "react";
import "./Day-styles.css";
// import logo from ''
const Day = ({ date, time, img, children, ...otherProps }) => {
  // console.log(children);
  return (
    <span {...otherProps}>
      <img src={img} width="100px" height="100px" alt="current weather" />
      {children}
    </span>
  );
};
export default Day;
