import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import { Button } from "reactstrap";

function Register() {
  return (
    <>
      <>
        <div className="main-container">
          <div className="mini-container smaller"></div>
          <div className="mini-container larger">
            <div className="back-home">
              <Link to="/">
                <Button className="services-button">Home</Button>
              </Link>
            </div>
            <h1 className="login-title">Sign Up</h1>
            <p className="login-text">
              Pay rent and other bills at the click of a button.
            </p>
            <form action="" method="post" className="form-action">
              <div className="form-group">
                <label for="" className="form-label">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="E.g. example.email.com"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label for="password1" className="form-label">
                  Password <span>*</span>
                </label>
                <input
                  type="password1"
                  placeholder="Type your password here"
                  className="form-input"
                />
                <label for="password2" className="form-label">
                  Re-enter Password <span>*</span>
                </label>
                <input
                  type="password2"
                  placeholder="Type your password here"
                  className="form-input"
                />
              </div>

              <div className="button-group">
                <button className="btn">Register</button>
              </div>
            </form>
            <p className="login-text">
              <Link to="/login" className="redirect">
                Already have an account. Login
              </Link>
            </p>
          </div>
        </div>
      </>
    </>
  );
}
export default Register;
