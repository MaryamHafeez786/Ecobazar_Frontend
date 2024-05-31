import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const gotoSignup = () => {
    navigate("/signup");
  };
  return (
    <div>{/* <button onClick={() => gotoSignup()}>Sign In</button> */}</div>
  );
};

export default SignIn;
