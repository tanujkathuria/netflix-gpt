import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 text-left absolute  text-white hidden md:block md:bg-gradient-to-r from-black">
      <h1 className="m-1 text-3xl font-bold">{title}</h1>
      <p className="m-1 text-lg text-wrap w-80">{overview}</p>
      <div className="flex">
        <button
          type="submit"
          className="m-1 p-4 w-20 block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Play
        </button>
        <button className="m-1 block rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
