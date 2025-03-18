import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">NewsExplorer</h3>
          <p className="footer__description">
            Stay informed with the latest news from around the world.
          </p>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Navigation</h3>
          <ul className="footer__links">
            <li>
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="/saved" className="footer__link">
                Saved Articles
              </a>
            </li>
            <li>
              <a href="/about" className="footer__link">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Connect</h3>
          <div className="footer__social">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} NewsExplorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
