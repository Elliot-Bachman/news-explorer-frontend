import "./MobileMenu.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";

function MobileMenu({ isOpen, onClose, handleLoginClick, isLoggedIn }) {
  const { pathname } = useLocation();
  const currentPage = useContext(CurrentPageContext);
  return (
    <div className={`modal menu ${isOpen && "modal_opened"}`}>
      <div
        className={`menu__content menu__content_info menu__content_page_${currentPage}`}
      >
        <div className={`menu__header menu__header_page_${currentPage}`}>
          <Link to="/" className="menu__sitename_link">
            <p className={`menu__sitename menu__sitename_page_${currentPage}`}>
              NewsExplorer
            </p>
          </Link>
          <button
            onClick={onClose}
            type="button"
            className={`menu__close menu__close_page_${currentPage}`}
          ></button>
        </div>
        <div className="menu__links">
          <Link to="/">
            <button
              onClick={onClose}
              type="button"
              className={`menu__link menu__link_page_${currentPage} menu__link_to-home ${
                pathname === "home" ? `menu__link_current_${currentPage}` : ""
              }`}
            >
              Home
            </button>
          </Link>
          {isLoggedIn ? (
            <div className="menu__links menu__logged-in">
              <Link to="/saved-news">
                <button
                  onClick={onClose}
                  type="button"
                  className={`menu__link menu__link_${currentPage} menu__link_to-saved ${
                    pathname === "saved-news"
                      ? `menu__link_current_${currentPage}`
                      : ""
                  }`}
                >
                  Saved articles
                </button>
              </Link>
              <button
                className={`menu__current-user menu__current-user_page_${currentPage}`}
              >
                <p
                  className={`menu__current-user_name menu__current-user_name_${currentPage} `}
                >
                  Elise
                </p>
                <div
                  className={`menu__current-user_name_signout menu__current-user_name_signout_${currentPage}`}
                ></div>
              </button>
            </div>
          ) : (
            <div className="menu__links menu__logged-out">
              <button className="menu__signin" onClick={handleLoginClick}>
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
