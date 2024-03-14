import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GptSearch = () => {
  return (
    <div className="bg-black">
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GptSearch;
