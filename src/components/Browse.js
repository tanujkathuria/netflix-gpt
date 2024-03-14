import React from "react";
import { useSelector } from "react-redux";
import useAllTypesMovies from "../hooks/useAllTypesMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useAllTypesMovies();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div>
      <Header></Header>
      {showGPTSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
