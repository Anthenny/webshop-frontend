import React from "react";
import { Link } from "react-router-dom";

import "./login.scss";

const Login = () => {
  return (
    <div className="login" id="login">
      <div className="container">
        <div className="img__box"></div>
        <div className="login__box">
          <div className="login__form">
            <div className="form__text">
              <h1>Welkom terug !</h1>
              <p>Log in om door te gaan</p>
            </div>
            <form action="#" className="form">
              <span className="ErroMessage">Error message</span>
              <div className="box">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                </label>
                <input type="text" id="email" name="email" placeholder="Vul uw email in" />
              </div>
              <div className="box">
                <label htmlFor="wachtwoord">
                  <i className="fas fa-lock"></i>
                </label>
                <input
                  type="password"
                  id="wachtwoord"
                  name="wachtwoord"
                  placeholder="Vul uw wachtwoord in"
                />
              </div>
              <p className="wachtwoordVergeten"> Wachtwoord vergeten ?</p>
              <button>Log in</button>
              <Link to="/signup" className="form__Link">
                <p className="info__text">
                  Heb je geen account? <span>Sign up</span>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
