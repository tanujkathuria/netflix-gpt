import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

export const useMovieTrailer = (movie_id) => {
  const [video_url, setVideo_URL] = useState();
  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
    const res = await fetch(url, API_OPTIONS);
    const trailer = await res.json();
    console.log(trailer);
    const { key } = trailer.results.filter(
      (result) => result.type === "Trailer"
    )[0];
    setVideo_URL(`https://www.youtube.com/embed/${key}`);
  };
  useEffect(() => {
    getMovieVideos();
  });
  return video_url;
};
