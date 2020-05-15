import React from "react";
import { useParams } from "react-router-dom";
import CoverImage from "../Movie/CoverImage/CoverImage";
const MovieInfo = () => {
  const params = useParams();
  // console.log(params.movieId);
  return (
    <div>
      <div>
        <CoverImage />
      </div>
    </div>
  );
};

export default MovieInfo;
