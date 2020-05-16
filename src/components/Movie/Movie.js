import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoverImage from "../Movie/CoverImage/CoverImage";
import Summary from "./Summary/Summary";
import Cast from "./Cast/Cast";
import "./Movie.scss";
import { API_URL, API_KEY } from "../../config";

function useCast(params) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/${params.movieId}/credits?api_key=${API_KEY}`
      ).catch((err) => console.log(err));

      //  console.log(res.data.cast);

      setCast(res);
    })();
  }, [params.movieId]);
  return cast;
}

const MovieInfo = () => {
  const params = useParams();
  //  console.log(params.movieId);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/${params.movieId}?api_key=${API_KEY}&language=en-US`
      );
      //  console.log(res);
      setMovie(res);
    })();
  }, [params.movieId]);

  const cast = useCast(params);

  //console.log(cast);

  return (
    <div className="movie-info-container">
      <CoverImage movie={movie} />
      <Summary movie={movie} />
      <Cast cast={cast} />
    </div>
  );
};

export default MovieInfo;
