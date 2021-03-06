import React from "react";
import "./Review.scss";

const Review = ({ review }) => {
  const renderReviews = (item) => {
    let shrink = item.content.split(" ").slice(0, 40).join(" ");

    return <div className="movie-review">{shrink}</div>;
  };

  return (
    <div className="review-container">
      <h1>POPULAR REVIEWS</h1>
      {review.data ? (
        <div className="movieinfo-review-container">
          {review.data.results.map((item) => {
            return (
              <div key={item.id} className="movie-review-div">
                <h2>{item.author}</h2>
                {renderReviews(item)}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Review;
