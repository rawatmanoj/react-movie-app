import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoverImage from "../Movie/CoverImage/CoverImage";
import { API_URL, API_KEY } from "../../config";

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
  }, []);

  return (
    <div>
      <div>
        <CoverImage movie={movie} />
      </div>
    </div>
  );
};

export default MovieInfo;
