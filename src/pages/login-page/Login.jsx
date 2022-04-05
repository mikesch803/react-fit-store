import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { LoginContext } from "../../context";
import { PassWordNotShowIcon } from "../../icons/icons";
import { AuthReducer } from "../../reducer/AuthReducer";
import { ToastContext } from "../../context/toast-context";
import { ToastSuccess } from "../../components/toast/Toast";

export function Login() {
  const { setToastMsg, toastState, setToastState } = useContext(ToastContext);
  const [state, dispatch] = useReducer(AuthReducer, {
    field: {},
    passwordType: "password",
    showPasswordIcon: <PassWordNotShowIcon />,
  });
  const { setLogin } = useContext(LoginContext);

  const loginUserHandler = async (e) => {
    e.preventDefault();

    if (state.field.email && state.field.password) {
      try {
        const response = await axios.post(`/api/auth/login`, state.field);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.encodedToken);
          setLogin(true);
          setToastState(true);
          setToastMsg("Signin sucessfully");
          setTimeout(() => {
            setToastState(false);
          }, 1500);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="grid-layout-login">
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
            onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
          />
          <span
            className="form-passwordeye"
            onClick={() => dispatch({ type: "CHANGE_TYPE" })}
          >
            {state.showPasswordIcon}
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
        <Link to="/signup" className="btn btn-link link-account">
          create a new account
        </Link>
      </form>
    </div>
  );
}
