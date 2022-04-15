import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { useLogin } from "../../context";
import { AuthReducer } from "../../reducer/AuthReducer";
import { PassWordNotShowIcon, PassWordShowIcon } from "../../icons/icons";
import { ToastContext } from "../../context/toast-context";
export function Signup() {
  const { setToastMsg, setToastState } = useContext(ToastContext);

  const [state, dispatch] = useReducer(AuthReducer, {
    field: {},
    passwordType: "password",
  });

  const { setLogin } = useLogin();
  const signupHandler = async (e) => {
    e.preventDefault();
    if (
      state.field.email.indexOf("@") >= 0 &&
      state.field.password.length >= 8 &&
      state.field.confirmPassword === state.field.password
    ) {
      try {
        const response = await axios.post(`/api/auth/signup`, state.field);
        if (response.status === 201) {
          setLogin(true);
          setToastState(true);
          setToastMsg("Signin sucessfully");
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }

        localStorage.setItem("token", response.data.encodedToken);
      } catch (error) {
        console.log(error);
      }
    }

    if (state.field.email.indexOf("@") === -1) {
      dispatch({ type: "EMAIL_ERR" });
    } else {
      dispatch({ type: "EMAIL_ERR" });
    }

    if (state.field.password.length < 8) {
      dispatch({ type: "PASSWORD_ERR" });
    } else {
      dispatch({ type: "PASSWORD_ERR" });
    }

    if (state.field.password !== state.field.confirmPassword) {
      dispatch({ type: "CONFIRM_PASSWORD_ERR" });
    } else {
      dispatch({ type: "CONFIRM_PASSWORD_ERR" });
    }
  };

  return (
    <div className="grid-layout-signup">
      <main className="form-main">
      <form
        className="form form-signup"
        onSubmit={(e) => {
          signupHandler(e);
        }}
      >
        <h2 className="title-form">Signup</h2>
        <div className="parent-div">
          <input
            type="text"
            placeholder="first name"
            className="form-input flex-1"
            name="firstName"
            onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
            required
          />
          <input
            type="text"
            placeholder="last name"
            className="form-input flex-1"
            name="lastName"
            onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
            required
          />
        </div>
        <input
          type="text"
          placeholder="email"
          className="form-input"
          name="email"
          onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
          required
        />
        {state.emailErrState && (
          <small className="form-error">invalid mail</small>
        )}
        <div className="parent-div">
          <input
            type={state.passwordType}
            placeholder="password"
            className="form-input flex-1"
            name="password"
            onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
            required
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
        <div className="parent-div">
          <input
            type={state.passwordType}
            placeholder="confirm password"
            className="form-input flex-1"
            name="confirmPassword"
            onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
            required
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
        {state.confirmPasswordErrState && (
          <small className="form-error">Password did not matched</small>
        )}
        <div className="form-checkbox signup-checkbox">
          <label>
            <input type="checkbox" required /> I accepted all terms and
            conditions
          </label>
        </div>
        <button className="btn btn-primary form-btn" type="submit">
          create new account
        </button>
        <Link to="/login" className="btn btn-link link-account">
          Already have an account
        </Link>
      </form>
      </main>
    </div>
  );
}
