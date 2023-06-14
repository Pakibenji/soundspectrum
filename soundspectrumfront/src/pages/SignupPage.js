import React, { useState } from "react";
import Signup from "../components/Signup";
import { NavLink } from "react-router-dom";
import PrivateText from "../components/PrivateText";
import Logout from "../components/Logout";
const SignupPage = () => {
  const [currUser, setCurrUser] = useState(null);
  if (currUser)
    return (
      <div>
        <PrivateText currUser={currUser} />
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  return (
    <>
      <Signup currUser={currUser} setCurrUser={setCurrUser} />
    </>
  );
};

export default SignupPage;
