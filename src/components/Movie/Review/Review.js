import React from "react";
import "./Review.scss";

const Review = ({ review }) => {
  const renderReviews = (item) => {
    // if (item.content.length < 450) {
    //   return <div className="movie-review">{item.content}</div>;
    // } else {
    let shrink = item.content.split(" ").slice(0, 40).join(" ");
    //console.log(shrink);
    return <div className="movie-review">{shrink}</div>;
    // }
  };

  console.log(review);
  return (
    <div className="review-container">
      <h1>POPULAR REVIEWS</h1>
      {review.data ? (
        <div className="movieinfo-review-container">
          {review.data.results.map((item) => {
            return (
              <div className="movie-review-div">
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
