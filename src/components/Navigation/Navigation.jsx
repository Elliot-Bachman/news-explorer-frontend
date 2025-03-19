import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLoginClick, onLogout, onRegisterClick, currentPath }) {
  // This is a temporary state for demo purposes. In a real app, this would come from context or state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This is for demonstration purposes - toggles between logged in and logged out
  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

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
        {isLoggedIn ? (
          <button
            className="navigation__button navigation__button_type_logout"
            onClick={() => {
              onLogout();
              handleAuthToggle();
            }}
          >
            Sign out
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
