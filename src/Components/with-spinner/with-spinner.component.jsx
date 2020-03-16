import React from "react";
import "./with-spinner.styles.css";
const WithSpinner = wrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="container">
      <div className="loader"></div>
    </div>
  ) : (
    <wrappedComponent {...otherProps} />
  );
};
export default WithSpinner;
