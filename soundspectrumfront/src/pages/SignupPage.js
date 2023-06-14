import React, { useState } from "react";
import Signup from "../components/Signup";

const SignupPage = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <>
      <Signup currUser={currUser} setCurrUser={setCurrUser} />
    </>
  );
};

export default SignupPage;
