import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { useLogin } from "../../context";
import { AuthReducer } from "../../reducer/AuthReducer";
import { PassWordNotShowIcon, PassWordShowIcon } from "../../icons/icons";
import { ToastContext } from "../../context/toast-context";
import { useTitle, useValidation } from "../../hooks";
export function Signup() {

  useTitle('Signup')

  const { setToastMsg, setToastState } = useContext(ToastContext);
  const { errMsg, formValidation } = useValidation();
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
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      } catch (error) {
      }
    }
  };

  return (
    <div className="grid-layout-signup">
      <form
        className="form form-signup"
        onSubmit={(e) => {
          formValidation(
            state.field.email,
            state.field.password,
            state.field.confirmPassword
          );
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
          <small className="form-error">{errMsg.email}</small>
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
          <small className="form-error">
         {errMsg.password}
          </small>
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
          <small className="form-error">{errMsg.confirmPassword}</small>
        <button className="btn btn-primary form-btn" type="submit">
          create new account
        </button>
        <Link to="/login" className="btn btn-link link-account">
          Already have an account
        </Link>
      </form>
    </div>
  );
}
