import React from "react";
import "./Navigation.css";

function Navigation({ onLoginClick, onLogout, onRegisterClick }) {
  return (
    <nav className="navigation">
      <div className="navigation__logo">NewsExplorer</div>
      <div className="navigation__buttons">
        <button
          className="navigation__button navigation__button_type_login"
          onClick={onLoginClick}
        >
          Sign in
        </button>
        <button
          className="navigation__button navigation__button_type_register"
          onClick={onRegisterClick}
        >
          Sign up
        </button>
        <button
          className="navigation__button navigation__button_type_logout"
          onClick={onLogout}
        >
          Sign out
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
