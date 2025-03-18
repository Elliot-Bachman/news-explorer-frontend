import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLoginClick, onLogout, onRegisterClick, currentPath }) {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__logo">
        NewsExplorer
      </Link>

      <div className="navigation__links">
        <Link
          to="/"
          className={`navigation__link ${
            currentPath === "/" ? "navigation__link_active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/saved-news"
          className={`navigation__link ${
            currentPath === "/saved-news" ? "navigation__link_active" : ""
          }`}
        >
          Saved Articles
        </Link>
      </div>

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
