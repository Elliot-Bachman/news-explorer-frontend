import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import { getNewsArticles } from "../../utils/NewsAPi";

function App() {
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // default: logged out

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsSuccessModalOpen(false);
  };

  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    // Mock successful login
    setIsLoggedIn(true);
    closeAllModals();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted");
    // Show success modal instead of auto-login
    setIsRegisterModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    setIsLoggedIn(false);
  };

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setError(null);
    setNoResults(false);
    setArticles([]);

    try {
      const results = await getNewsArticles(searchQuery);
      if (results.length === 0) {
        setNoResults(true);
      } else {
        setArticles(results);
        setVisibleCount(3); // reset visible articles
      }
    } catch (err) {
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Header
        onLoginClick={handleLoginClick}
        onLogout={handleLogout}
        onRegisterClick={handleRegisterClick}
        handleSearch={handleSearch}
        currentPath={location.pathname}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              articles={articles}
              isLoading={isLoading}
              error={error}
              noResults={noResults}
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
              isLoggedIn={isLoggedIn}
              onLoginClick={handleLoginClick}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              isLoggedIn={isLoggedIn}
              onLoginClick={handleLoginClick}
            />
          }
        />
      </Routes>
      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeAllModals}
        onRegisterClick={handleSwitchToRegister}
        onSubmit={handleLoginSubmit}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeAllModals}
        onLoginClick={handleSwitchToLogin}
        onSubmit={handleRegisterSubmit}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={closeAllModals}
        onSignInClick={handleSwitchToLogin}
      />
    </div>
  );
}

export default App;
