import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResults } from "../utils/gptSlice";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    const query =
      "act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, 3 idiots, Rocket Singh ";
    // make api call to open ai
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: query }],
      model: "gpt-3.5-turbo",
    });
    if (!completion.choices) return;
    // handle error case

    console.log(completion.choices[0].message.content);
    const gptMovies = completion.choices[0].message.content.split(",");
    console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => findMovieInTMDB(movie));
    console.log(promiseArray); // array of promises
    // for each movie search tmdb api
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGPTMovieResults({
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  const findMovieInTMDB = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&page=1`;
    const response = await fetch(url, API_OPTIONS);
    const data = await response.json();
    console.log(data);
    return data.results;
  };

  return (
    <div>
      <form className="p-6 bg-black">
        <input
          className="p-4 m-4 w-1/2"
          type="text"
          ref={searchText}
          placeholder="what would you like to watch today ?"
        ></input>
        <button
          className="p-2  bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
