import React from "react";
import "./Spinner.scss";
import { AtomSpinner } from "react-epic-spinners";

const Spinner = () => {
  // document.querySelector(".spinner-container").style.transition = "opacity 5s";
  // document.querySelector(".spinner-container").style.opacity = "0";

  return (
    <div className="spinner-container">
      <AtomSpinner className="spinner" size="100" color="#966BB4" />
    </div>
  );
};

export default Spinner;
