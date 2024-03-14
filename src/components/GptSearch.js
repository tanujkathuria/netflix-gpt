import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GptSearch = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-black">
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GptSearch;
