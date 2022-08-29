import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import "./style.css";

function Login() {
  return (
    <>
     <div className="main-container reverse">
      <div className="mini-container larger">
        <h1 className="login-title">RMS Login</h1>
        <p className="login-text">
        Pay rent and other bills at the click of a button.
        </p>
        <form action="" method="post" className="form-action">
          <div className="form-group">
            <label for="" className="form-label">Email <span>*</span></label>
            <input
              type="email"
              placeholder="E.g. example.email.com"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label for="" className="form-label">Password <span>*</span></label>
            <input
              type="password"
              placeholder="Type your password here"
              className="form-input"
            />
          </div>
          <div className="button-group">
            <button className="btn" href="/register">Login</button>
          </div>
        </form>
        <p className="login-text">
        <Link to="/register" className="redirect">Click here to register</Link>
        </p>
      </div>
      <div className="mini-container smaller"></div>
    </div>
    </>
  );
}

export default Login;
