import React from "react";
import logo from "../assets/img/spectrum.gif";
import { NavLink } from "react-router-dom";

const Profil = () => {
  return (
    <>
      <section className="title-form">
        <div className="link-accueil-container">
          <NavLink className="link-accueil" to="/">
            <p>retour à l'accueil</p>
          </NavLink>
        </div>
        <h1>profil</h1>
        <div className="form-container">
          <div className="logo">
            <img src={logo} alt="logo sound spectrum" />
          </div>
          <div className="form-card">
            <form>
              <div className="email-container">
                <input
                  className="input-mail"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  max="40"
                />
                <i class="fa-regular fa-envelope" id="email"></i>
              </div>
              <div className="password-container">
                <input
                  className="input-password"
                  type="password"
                  name="password"
                  placeholder="Nouveau mot de passe"
                  required
                  max="40"
                />
                <i className="fa-solid fa-lock" id="lock"></i>
              </div>
              <div className="password-container">
                <input
                  className="input-password"
                  type="password"
                  name="password"
                  placeholder="confirmation du mot de passe"
                  required
                  max="40"
                />
                <i className="fa-solid fa-lock" id="lock"></i>
              </div>
              <button className="button-form" type="submit">
                mettre à jour
              </button>
            </form>
            <div className="navlink-container">
              <NavLink className="inscription" to="/login">
                <p>Supprimer mon compte</p>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profil;
