import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleClick = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute h-full w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bImg"
        />
      </div>
      <form className="absolute w-4/12 p-12 bg-opacity-70 my-36 mx-auto right-0 left-0 text-white bg-black">
        <h1 className="font-bold text-2xl p-2">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-900 rounded-sm"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 m-2 w-full bg-gray-900 rounded-sm"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-900 rounded-sm"
        ></input>
        <button className="py-4 m-4 bg-red-600 rounded-lg w-1/2">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={handleClick}>
          {isSignInForm
            ? "New to Netflix ? Sign up now"
            : "Already a member, Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
