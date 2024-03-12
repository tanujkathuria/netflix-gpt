import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(MOVIES_URL, API_OPTIONS);
      const movies = await res.json();
      dispatch(addNowPlayingMovies(movies.results));
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
