import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { getNewsArticles } from "../../utils/NewsAPi";

function App() {
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const closeAllModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    // Form submission will be implemented in the next stage
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted");
    // Form submission will be implemented in the next stage
  };

  const handleLogout = () => {
    console.log("Logout clicked");
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
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
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
    </div>
  );
}

export default App;
