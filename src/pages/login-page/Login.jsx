import React, { useReducer } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useLogin, useToast } from "../../context";
import { PassWordNotShowIcon, PassWordShowIcon } from "../../icons/icons";
import { AuthReducer } from "../../reducer/AuthReducer";

export function Login() {
  const { setToastMsg, setToastState, setToastStyles } = useToast();
  const [state, dispatch] = useReducer(AuthReducer, {
    field: {},
    passwordType: "password",
  });
  const { setLogin, guestLoginHandler } = useLogin();
  const location = useLocation();
  const navigate = useNavigate();
  const loginUserHandler = async (e) => {
    e.preventDefault();

    if (state.field.email && state.field.password) {
      try {
        const response = await axios.post(`/api/auth/login`, state.field);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.encodedToken);
          setLogin(true);
          navigate(location?.state?.from?.pathname || "/");
          setToastState(true);
          setToastStyles("alert alert-success");
          setToastMsg("Signin sucessfully");
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }
      } catch (error) {
        if (error.response.status === 404) {
          setToastState(true);
          setToastMsg("Please sign up first");
          setToastStyles("alert alert-warning");
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }
      }
    }
  };

  return (
    <div className="grid-layout-login">
      <main className="form-main">
        <form className="form form-login" onSubmit={(e) => loginUserHandler(e)}>
          <h2 className="title-form">Login</h2>
          <input
            required
            type="text"
            placeholder="email"
            className="form-input"
            name="email"
            onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
          />
          {state.emailErrState && (
            <small className="form-error">email invalid</small>
          )}
          <div className="parent-div">
            <input
              required
              type={state.passwordType}
              placeholder="password"
              className="form-input flex-1"
              name="password"
              onChange={(e) =>
                dispatch({ type: "ADD_FIELD", payload: e.target })
              }
            />
            <span
              className="form-passwordeye"
              onClick={() => dispatch({ type: "CHANGE_TYPE" })}
            >
              {state.passwordType === "text" ? (
                <PassWordShowIcon />
              ) : (
                <PassWordNotShowIcon />
              )}
            </span>
          </div>
          {state.passwordErrState && (
            <small className="form-error">
              Password should be more than 8 character
            </small>
          )}
          <div className="form-checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="#" className="btn btn-link">
              Forget password?
            </Link>
          </div>
          <button className="btn btn-primary form-btn" type="submit">
            login
          </button>
          <button
            className="btn btn-outline form-btn"
            onClick={(e) => guestLoginHandler(e)}
          >
            guest login
          </button>
          <Link to="/signup" className="btn btn-link link-account">
            create a new account
          </Link>
        </form>
      </main>
    </div>
  );
}
