export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY} `,
  },
};

export const MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const IMAGE_CDN = "https://image.tmdb.org/t/p/w200/";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
