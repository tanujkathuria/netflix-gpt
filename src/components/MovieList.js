import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl uppercase mt-2">{title}</h1>
      <div className="flex w-full flex-wrap m-2 p-4">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
