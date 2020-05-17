import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoverImage from "../Movie/CoverImage/CoverImage";
import Summary from "./Summary/Summary";
import Cast from "./Cast/Cast";
import Review from "./Review/Review";
import Spinner from "../elements/Spinner/Spinner";
import "./Movie.scss";
import { API_URL, API_KEY } from "../../config";

function useCast(params) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/${params.movieId}/credits?api_key=${API_KEY}`
      ).catch((err) => console.log(err));

      setCast(res);
    })();
  }, [params.movieId]);
  return cast;
}

function useReview(params) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/${params.movieId}/reviews?api_key=${API_KEY}`
      ).catch((err) => console.log(err));

      setReview(res);
    })();
  }, [params.movieId]);
  return review;
}

function useLoader() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 500);

  return loader;
}

const MovieInfo = () => {
  const loader = useLoader();

  const params = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/${params.movieId}?api_key=${API_KEY}&language=en-US`
      );

      setMovie(res);
    })();
  }, [params.movieId]);

  const cast = useCast(params);
  const review = useReview(params);

  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div className="movie-info-container">
          <CoverImage movie={movie} />
          <Summary movie={movie} />
          <Cast cast={cast} />
          <Review review={review} />
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
