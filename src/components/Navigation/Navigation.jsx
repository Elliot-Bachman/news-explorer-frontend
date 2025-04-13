import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import mobileMenuIcon from "../../assets/images/mobile-icon-white.svg";
import mobileMenuIconBlack from "../../assets/images/mobile-icon-black.svg";

function Navigation({
  onLoginClick,
  onLogout,
  onRegisterClick,
  currentPath,
  isLoggedIn,
  userName = "Test",
}) {
  // Add state to track if mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine if we're on the saved articles page
  const isSavedArticlesPage = currentPath === "/saved-news";

  return (
    <nav
      className={`navigation ${
        isSavedArticlesPage ? "navigation--saved-articles" : ""
      } ${isMobileMenuOpen ? "navigation--mobile-open" : ""}`}
    >
      <div className="navigation__left">
        <Link to="/" className="navigation__logo">
          NewsExplorer
        </Link>
      </div>

      {/* Mobile menu button - toggles between hamburger and close icons */}
      <button
        className={`navigation__mobile-menu ${
          isMobileMenuOpen ? "navigation__mobile-menu--open" : ""
        }`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <span className="navigation__close-icon"></span>
        ) : (
          <img
            src={isSavedArticlesPage ? mobileMenuIconBlack : mobileMenuIcon}
            alt="Menu"
          />
        )}
      </button>

      <div className="navigation__right">
        <div className="navigation__links">
          <Link
            to="/"
            className={`navigation__link ${
              currentPath === "/" ? "navigation__link_active" : ""
            }`}
          >
            Home
          </Link>

          {isLoggedIn && (
            <Link
              to="/saved-news"
              className={`navigation__link navigation__link--saved ${
                isSavedArticlesPage ? "navigation__link_active" : ""
              }`}
            >
              Saved articles
            </Link>
          )}
        </div>

        <div className="navigation__buttons">
          {isLoggedIn ? (
            <button
              className="navigation__button navigation__button_type_logout"
              onClick={onLogout}
            >
              {userName}
              <img
                src={logoutIcon}
                alt="Logout"
                className="navigation__logout-icon"
              />
            </button>
          ) : (
            <button
              className="navigation__button navigation__button_type_login"
              onClick={onLoginClick}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
