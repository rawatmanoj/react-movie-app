import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import "./CoverImage.scss";
const CoverImage = ({ movie }) => {
  return (
    <div>
      <div className="movie-heroimage-container">
        {movie.data ? (
          <div key={movie.data.id} className="movie-imagediv-container">
            <div
              style={{
                background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, 
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
                  <div className="movieinfo-title">{movie.data.title}</div>
                  {movie.data.tagline !== "" ? (
                    <div className="movieinfo-tagline">
                      {movie.data.tagline}
                    </div>
                  ) : null}
                  <div className="movieinfo-rating">
                    Rating {movie.data.vote_average}
                  </div>
                  <div>
                    {movie.data.genres.map((genre, i) => {
                      return (
                        <div key={i} className="movie-info-genre">
                          {" "}
                          {genre.name} |
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CoverImage;
