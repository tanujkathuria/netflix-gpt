import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const showSignInOut = () => {
    if (!user) {
      return (
        <button className="px-1 text-white" onClick={handleSignIn}>
          Sign In
        </button>
      );
    }
    return (
      <div className="flex">
        <div className="flex m-1 w-12">
          <img alt="profilepic" src={user?.photoURL}></img>
        </div>
        <button
          className="mx-1 font-bold text-white rounded-lg w-24 h-12 cursor-pointer"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, displayName, uid, photoURL } = user;
        dispatch(
          addUser({
            uuid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="flex flex-col px-8 py-2 z-10 w-full bg-gradient-to-t from-black md:justify-between sm:bg-blue-800 md:bg-green-800 md:flex-row cursor-pointer">
      <img
        className="h-20 w-30 rounded-full cursor-pointer"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        href="/"
        // src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="logo"
      ></img>

      <div className="flex justify-between w-42 h-12 m-4 cursor-pointer px-1 text-nowrap">
        <button
          className="px-4 py-1 m-2 bg-black text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {!showGPTSearch ? "GPT Search" : "Home Page"}
        </button>
        {showSignInOut()}
      </div>
    </div>
  );
};

export default Header;
