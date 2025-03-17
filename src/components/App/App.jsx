import React from "react";
import "./App.css";
import Header from "../Header/Header";

function App() {
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
      />
    </div>
  );
}

export default App;
