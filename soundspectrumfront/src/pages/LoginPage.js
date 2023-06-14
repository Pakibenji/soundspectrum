import React, { useState } from "react";
import Login from "../components/Login";

const LoginPage = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <>
      <Login currUser={currUser} setCurrUser={setCurrUser} />
    </>
  );
};

export default LoginPage;
