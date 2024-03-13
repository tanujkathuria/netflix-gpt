import React from "react";
import useAllTypesMovies from "../hooks/useAllTypesMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useAllTypesMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>

      {/*
        main container 
        - video background 
        - video title 

        secondary container 
        - movies list *n 
        - many cards * n
        */}
    </div>
  );
};

export default Browse;
