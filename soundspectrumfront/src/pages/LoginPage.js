import React, { useState } from "react";
import Login from "../components/Login";
import { NavLink } from "react-router-dom";
import PrivateText from "../components/PrivateText";
import Logout from "../components/Logout";

const LoginPage = () => {
  const [currUser, setCurrUser] = useState(null);
  if (currUser)
    return (
      <div>
        {currUser.role === "admin" && (
          <div>
            <a href="http://localhost:3000/avo" currUser={currUser}>
              Accéder au panel administrateur
            </a>
          </div>
        )}
        <PrivateText currUser={currUser} />
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  return (
    <>
      <div>
        <Login currUser={currUser} setCurrUser={setCurrUser} />
      </div>
      <div>
        Pas encore inscrit?
        <NavLink to="/signup">s'inscrire</NavLink>{" "}
      </div>
    </>
  );
};

export default LoginPage;
