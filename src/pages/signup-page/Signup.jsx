import React from "react";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./Signup.css";
export function Signup() {
  return (
    <div class="grid-layout-signup">
      <Header />
      <form class="form form-signup">
        <h2 class="title-form">Signup</h2>
        <input
          type="text"
          placeholder="email"
          
          class="form-input"
        />
        <input
          type="text"
          placeholder="password"
          
          class="form-input"
        />
        <div class="form-checkbox signup-checkbox">
          <label>
            <input type="checkbox" /> I accepted all terms and conditions
          </label>
        </div>
        <button class="btn btn-primary form-btn">create new account</button>
        <Link to="/login" class="btn btn-link link-account">
          Already have an account
        </Link>
      </form>
    </div>
  );
}
