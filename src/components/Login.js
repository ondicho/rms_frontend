import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import "./style.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData.email);
    console.log(loginData.password);
  };
  return (
    <>
      <div className="main-container reverse">
        <div className="mini-container larger">
          <h1 className="login-title">RMS Login</h1>
          <p className="login-text">
            Pay rent and other bills at the click of a button.
          </p>
          <form method="post" className="form-action" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder="E.g. example.email.com"
                className="form-input"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Password <span>*</span>
              </label>
              <input
                type="password"
                placeholder="Type your password here"
                className="form-input"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <div className="button-group">
              <button className="btn" href="/register">
                Login
              </button>
            </div>
          </form>
          <p className="login-text">
            <Link to="/register" className="redirect">
              Click here to register
            </Link>
          </p>
        </div>
        <div className="mini-container smaller"></div>
      </div>
    </>
  );
}

export default Login;
