import React, { useState } from "react";
import Radio from "../components/Radio";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/spectrum.gif";
import notes from "../assets/img/notes.gif";

const Home = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <>
      <section className="header">
        <img className="logo" src={logo} alt="logo sound spectrum" />
        <div className="title">
          <h1>SOUND SPECTRUM</h1>
          <p>Bienvenue sur Sound Spectrum</p>
          </div>
        {currUser == null && (
          <div className="authenticate">
            {" "}
            <NavLink to="/login" currUser={currUser} setCurrUser={setCurrUser}>
              <button>Se connecter</button>
            </NavLink>
            <NavLink to="/signup" currUser={currUser} setCurrUser={setCurrUser}>
              <button>S'inscrire</button>
            </NavLink>{" "}
          </div>
        )}
        <div className="header-container">
          <p className="soundspectrum-description">
            Bienvenue sur Sound Spectrum, votre destination ultime pour le
            streaming radio ! Découvrez un univers musical infini avec nos
            nombreuses stations soigneusement sélectionnées couvrant tous les
            genres. Explorez de nouveaux horizons et plongez dans vos styles
            préférés grâce à notre système de filtrage intuitif. Créez votre
            liste de favoris et profitez de votre musique préférée à tout
            moment. Rejoignez-nous dès maintenant pour une expérience musicale
            fluide et immersive. Inscrivez-vous et laissez-vous emporter par la
            diversité sonore de Sound Spectrum.
          </p>
        </div>
        <div className="portée">
          <img src={notes} alt="gif portée" />
        </div>
      </section>

      <Radio />
      <Footer />
    </>
  );
};

export default Home;
