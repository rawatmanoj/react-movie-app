import React from "react";
import "./Summary.scss";
const Summary = ({ movie }) => {
  return (
    <div className="movieinfo-summary-container">
      <div className="movieinfo-data">
        <h2>SUMMARY</h2>
        {movie.data ? (
          <div className="movieinfo-summary">{movie.data.overview}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Summary;
