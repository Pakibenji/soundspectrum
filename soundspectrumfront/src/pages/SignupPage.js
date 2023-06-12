import React, { useState } from "react";
import User from "../components/User";

const SignupPage = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div>
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
};

export default SignupPage;
