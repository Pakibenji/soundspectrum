import { useRef } from "react";
import logo from "../assets/img/spectrum.gif";
import { NavLink } from "react-router-dom";

const Login = ({ setCurrUser }) => {
  const formRef = useRef();
  const login = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/login";
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
      console.log(response.headers.get("Authorization"));
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
      user: {
        email: data.email,
        password: data.password,
      },
    };
    login(userInfo, setCurrUser);
    e.target.reset();
  };
  return (
    <>
      <section className="connexion">
        <h1>Connexion</h1>
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

              <button className="login" type="submit">
                Connexion
              </button>
            </form>
            <div className="navlink-container">
              <NavLink className="inscription" to="/signup">
                <p>Inscrivez-vous</p>
              </NavLink>
              <span>
                dès maintenant en un clic et découvrez un monde de radios
                personnalisées à portée de main !
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
