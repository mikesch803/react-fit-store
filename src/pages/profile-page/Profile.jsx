import React from "react";
import { useLogin } from "../../context";
import { useTitle } from "../../hooks/useTitle";
import "./Profile.css";
export function Profile() {
  const { user, logoutHandler } = useLogin();
useTitle('Profile')
  return (
    <div className="profile-page">
      <main className="profile-container ft-grey">
        <h2>Personal Information</h2>
        <h3>
          Name :
          <span className="ft-w-400">
            {user.firstName} {user.lastName}
          </span>
        </h3>
        <h3>
          Email :<span className="ft-w-400"> {user.email}</span>
        </h3>
        <button className="btn btn-logout" onClick={logoutHandler}>Logout</button>
      </main>
    </div>
  );
}

