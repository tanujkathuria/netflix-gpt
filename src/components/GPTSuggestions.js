import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  if (!movieNames || !movieResults) return;
  console.log(movieNames + "", movieResults);

  return (
    <div className="p-4 m-4 bg-black text-white">
      {movieNames.map((movie, index) => {
        return <MovieList title={movie} movies={movieResults[index]} />;
      })}
    </div>
  );
};

export default GPTSuggestions;
