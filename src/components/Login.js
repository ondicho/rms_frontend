import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { login } from "../Api/Calls.js";
import "./auth.css";
import "./style.css";

function Login() {
  Cookies.set("isLoggedIn", "false");
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("username", loginData.username);
    data.append("password", loginData.password);
    login(data).then((res) => {
      if ("access" in res) {
        // set token & redirect
        console.log(res);
        Cookies.set("token", res.access);
        Cookies.set("isLoggedIn", "true");
        window.location.href = "/";
      } else {
        // display error
        setError(res.detail);
      }
    });
  };
  return (
    <>
      <div className="main-container reverse">
        <div className="mini-container larger">
          <div className="back-home">
            <Link to="/">
              <Button className="services-button">Home</Button>
            </Link>
          </div>
          <h1 className="login-title">RMS Login</h1>
          <p className="login-text">
            Pay rent and other bills at the click of a button.
          </p>
          <form method="post" className="form-action" onSubmit={handleSubmit}>
            <div className="error">{error}</div>
            <div className="form-group">
              <label className="form-label">
                Email <span>*</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="form-input"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                password <span>*</span>
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
