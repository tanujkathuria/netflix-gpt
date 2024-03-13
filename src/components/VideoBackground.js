import React from "react";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const video_url = useMovieTrailer();
  return (
    <div className="w-screen h-2/3">
      <iframe
        className="w-screen h-2/3 aspect-video"
        src={video_url + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
