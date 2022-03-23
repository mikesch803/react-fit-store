import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { LoginContext } from "../../context";
import { AuthReducer } from "../../reducer/AuthReducer";
import { PassWordShowIcon } from "../../icons/icons";
export function Signup() {

  
const [state, dispatch] = useReducer(AuthReducer, {
  field:{},
  passwordType:"password",
  showPasswordIcon:<PassWordShowIcon/>
});

  const { setLogin } = useContext(LoginContext);
  const signupHandler = async (e) => {
    e.preventDefault();
    if(state.field.name && state.field.email && state.field.password){
    try {
      const response = await axios.post(`/api/auth/signup`, state.field);
      if (response.status === 201) {
        setLogin(true);
      }
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  }
  };

  return (
    <div className="grid-layout-signup">
      <form className="form form-signup" onSubmit={(e) => signupHandler(e)}>
        <h2 className="title-form">Signup</h2>
        <input
          type="text"
          placeholder="name"
          className="form-input"
          name="name"
          onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
          required
        />
         <small className="form-error" style={{visibility:"hidden"}}>required</small>
        <input
          type="text"
          placeholder="email"
          className="form-input"
          name="email"
          onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
          required
        />
         <small className="form-error">{}</small>
          <input
          type={state.passwordType}
          placeholder="password"
          className="form-input"
          name="password"
          onChange={(e) => dispatch({ type: "ADD_FIELD", payload: e.target })}
          required
        /><span className="form-passwordeye" onClick={()=>dispatch({type:"CHANGE_TYPE"})}>{state.showPasswordIcon}</span>
         <small className="form-error">{}</small>
        <div className="form-checkbox signup-checkbox">
          <label>
            <input type="checkbox"  required/> I accepted all terms and
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
    </div>
  );
}
