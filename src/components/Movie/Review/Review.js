import React from "react";
import "./Review.scss";

const Review = ({ review }) => {
  const renderReviews = (item) => {
    if (item.content.length < 450) {
      return <div>{item.content}</div>;
    } else {
      let shrink = item.content.split(" ").join(" ");
      return <div>{shrink}</div>;
    }
  };

  console.log(review);
  return (
    <div className="review-container">
      <h1>POPULAR REVIEWS</h1>
      {review.data ? (
        <div className="movieinfo-review-container">
          {review.data.results.map((item) => {
            renderReviews(item);
            // return <div className="movie-review"> {item.content}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Review;
