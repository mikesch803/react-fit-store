import React, { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { LoginContext } from "../../context";
import { PassWordShowIcon } from "../../icons/icons";
import { AuthReducer } from "../../reducer/AuthReducer";

export function Login() {
  // const [inputFields, setInputFields] = useState({});
  const [state, dispatch] = useReducer(AuthReducer, {
    field:{},
    passwordType:"password",
    showPasswordIcon:<PassWordShowIcon/>
  });
  const { setLogin } = useContext(LoginContext);

  const loginUserHandler = async (e) => {
    e.preventDefault();
    
    if(state.field.email && state.field.password){
    try {
      const response = await axios.post(`/api/auth/login`, state.field);
      // const encodedToken = localStorage.getItem("token");
      localStorage.setItem("token", response.data.encodedToken);
      if (response.status === 200) {
        setLogin(true);
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

          // onChange={(e) =>
          //   setInputFields({ ...inputFields, [e.target.name]: e.target.value })
          // }
        />
        <input
          required
          type={state.passwordType}
          placeholder="password"
          className="form-input"
          name="password"
          onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}

          // onChange={(e) =>
          //   setInputFields({ ...inputFields, [e.target.name]: e.target.value })
          // }
        /><span className="form-passwordeye-login" onClick={()=>dispatch({type:"CHANGE_TYPE"})}>{state.showPasswordIcon}</span>
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
