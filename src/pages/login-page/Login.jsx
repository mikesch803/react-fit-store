import React from "react";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./Login.css";

export function Login() {
  return (
    <div className="grid-layout-login">
      <Header />
      <form className="form form-login">
        <h2 className="title-form">Login</h2>
        <input
          type="text"
          placeholder="email"
          className="form-input"
        />
        <input
          type="text"
          placeholder="password"
          className="form-input"
        />
        <div className="form-checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="#" className="btn btn-link">
            Forget password?
          </Link>
        </div>
        <button className="btn btn-primary form-btn">login</button>
        <Link to="/signup" className="btn btn-link link-account">
          create a new account
        </Link>
      </form>
    </div>
  );
}
