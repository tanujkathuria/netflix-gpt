import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  MOVIES_URL,
  POPULAR_MOVIES_URL,
} from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";

const useAllTypesMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(MOVIES_URL, API_OPTIONS);
      const movies = await res.json();
      dispatch(addNowPlayingMovies(movies.results));
    } catch (error) {}
  };

  const getPopularMovies = async () => {
    try {
      const res = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
      const movies = await res.json();
      dispatch(addPopularMovies(movies.results));
    } catch (error) {}
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
  }, []);
};

export default useAllTypesMovies;
