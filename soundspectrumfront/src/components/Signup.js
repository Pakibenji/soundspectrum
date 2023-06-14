import { useRef } from "react";
import logo from "../assets/img/spectrum.gif";
import { NavLink } from "react-router-dom";

const Signup = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const signup = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/signup";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;

      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signup(userInfo, setCurrUser);
    e.target.reset();
  };
  return (
    <>
      <section className="title-form">
        <h1>Formulaire d'inscription</h1>
        <div className="form-container">
          <div className="logo">
            <img src={logo} alt="logo sound spectrum" />
          </div>
          <div className="form-card">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="email-container">
                <input
                  className="input-mail"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <i class="fa-regular fa-envelope" id="email"></i>
              </div>
              <div className="password-container">
                <input
                  className="input-password"
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                />
                <i class="fa-solid fa-lock" id="lock"></i>
              </div>
              <button className="button-form" type="submit">
                s'inscrire
              </button>
            </form>
            <div className="navlink-container">
              <NavLink className="inscription" to="/login">
                <p>Se connecter</p>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
