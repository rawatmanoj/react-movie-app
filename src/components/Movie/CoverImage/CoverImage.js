import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import "./CoverImage.scss";
const CoverImage = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movie-heroimage-container">
      {movie.data ? (
        <div key={movie.data.id} className="movie-imagediv-container">
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) center center / cover no-repeat, 
              url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.data.backdrop_path}) center top / cover no-repeat rgb(255, 255, 255)`,
            }}
            className="movie-heroimage-container"
          >
            <div className="movie-desc-container">
              <div className="movie-items-container">
                <div className="movies-info">
                  <img
                    className="movies-infoimg"
                    alt="movie"
                    src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.data.poster_path}`}
                  ></img>
                </div>
              </div>
              <div className="movie-info-details">
                <h1>{movie.data.title}</h1>
                <h2>Rating {movie.data.vote_average}</h2>
                <div>
                  {movie.data.genres.map((genre) => {
                    return (
                      <div className="movie-info-genre"> {genre.name} |</div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CoverImage;
