import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  /*
    movie list - popular
        movie cards  
    movie list - now playig 
    movie list - trending
    movie list - horror 
    */
  return (
    <div className="text-white bg-black -mt-10">
      <MovieList title="now playing movies" movies={movies.nowPlayingMovies} />
      <MovieList title="popular movies" movies={movies.popularMovies} />
    </div>
  );
};

export default SecondaryContainer;
