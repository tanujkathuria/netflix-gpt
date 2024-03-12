import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log(user);
        const { email, displayName, uid, photoURL } = user;
        dispatch(
          addUser({
            uuid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user has signed out");
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);
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
  if (!user) return;

  return (
    <div className="flex  px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between">
      <img
        className="h-20 w-30 rounded-full"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        // src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="logo"
      ></img>

      <div className="flex justify-between w-42 h-14 m-4 cursor-pointer px-1">
        <div className="flex m-1">
          <img alt="profilepic" src={user?.photoURL}></img>
        </div>
        <button className="px-1 font-bold" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
