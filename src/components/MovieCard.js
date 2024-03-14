import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return;
  return (
    <div className="m-1">
      <img alt="card" src={`${IMAGE_CDN}${movie.poster_path}`}></img>
    </div>
  );
};

export default MovieCard;
