import React, { useState } from "react";
import Header from "../components/Header";
import Radio from "../components/Radio";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <>
      <Header />
      {currUser == null && (
        <div>
          {" "}
          <NavLink to="/login" currUser={currUser} setCurrUser={setCurrUser}>
            <button>Se connecter</button>
          </NavLink>
          <NavLink to="/signup" currUser={currUser} setCurrUser={setCurrUser}>
            <button>S'inscrire</button>
          </NavLink>{" "}
        </div>
      )}
      <Radio />
      <Footer />
    </>
  );
};

export default Home;
