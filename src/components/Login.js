import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(
      email && email.current ? email.current.value : "",
      password && password.current ? password.current.value : "",
      name && name.current ? name.current.value : ""
    );
    setErrorMessage(message);
    if (message) return;

    // create a new user sign in/ sign up logic here
    if (!isSignInForm) {
      // sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229",
          })
            .then(() => {
              const { email, displayName, uid, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uuid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      // sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { email, displayName, uid, photoURL } = user;
          dispatch(
            addUser({
              uuid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute h-full w-full">
        <img
          className="h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bImg"
        />
      </div>
      <form
        className="absolute w-4/12 p-12 bg-opacity-70 my-36 mx-auto right-0 left-0 text-white bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-900 rounded-sm"
            ref={name}
          ></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="p-4 m-2 w-full bg-gray-900 rounded-sm"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-900 rounded-sm"
        ></input>
        <p className="text-red-500 font-bold py-2 text-lg">{errorMessage}</p>
        <button
          className="py-4 m-4 bg-red-600 rounded-lg w-full"
          onClick={handleButtonClick}
        >
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
