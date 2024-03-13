import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  /*
    movie list - popular
        movie cards  
    movie list - now playig 
    movie list - trending
    movie list - horror 
    */
  return (
    <div className="-mt-40 z-100 text-white bg-black">
      <MovieList title="now playing movies" movies={movies.nowPlayingMovies} />
      <MovieList title="popular movies" movies={movies.popularMovies} />
    </div>
  );
};

export default SecondaryContainer;
