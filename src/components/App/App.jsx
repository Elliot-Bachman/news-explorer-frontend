import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

function App() {
  const location = useLocation();

  // Temporary handler functions until we implement the actual functionality
  const handleLoginClick = () => {
    console.log("Login clicked");
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleRegisterClick = () => {
    console.log("Register clicked");
  };

  const handleSearch = (searchQuery) => {
    console.log("Search query:", searchQuery);
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
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
