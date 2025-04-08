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

// Default news articles to display on the home page
const defaultArticles = [
  {
    source: {
      id: null,
      name: "NPR",
    },
    author: "",
    title:
      "Health secretary RFK Jr. endorses the MMR vaccine — stoking fury among his supporters - NPR",
    description:
      "Prominent anti-vaccine activists lined up on social media to denounce the move.",
    url: "https://www.npr.org/sections/shots-health-news/2025/04/07/nx-s1-5354900/hhs-rfk-endorses-mmr-measles-vaccine-stoking-supporters-fury",
    urlToImage:
      "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6346x3570+0+525/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F46%2F48%2F13b7c7c14f878d386d17249c9b90%2Fap25092718073024.jpg",
    publishedAt: "2025-04-07T21:42:58Z",
    content:
      'An endorsement of the measles, mumps and rubella vaccine by Health and Human Services Secretary Robert F. Kennedy Jr. has provoked an angry outcry from anti-vaccine activists.\r\n"The most effective wa… [+6027 chars]',
  },
  {
    source: {
      id: null,
      name: "Android Central",
    },
    author: "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
    title: "Tech hasn't become more buggy, you're just more connected",
    description:
      "Your phone is full of bugs, and you know all about them thanks to the internet.",
    url: "https://www.androidcentral.com/apps-software/tech-hasnt-become-more-buggy-youre-just-more-connected",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/Dv3utcWwDpvibMEVq9Kb9e-1200-80.jpg",
    publishedAt: "2025-04-06T12:00:10Z",
    content:
      "If you wander into the tech enthusiast alcove of the internet, you'll eventually see someone saying, \"Man, I hate this phone, and I'm never buying this brand again. There are too many bugs!!11!!!\"\r\nI… [+3726 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Mitchel Broussard",
    title: "Get $100 Off iPad Mini 7 on Amazon, Available From $399",
    description:
      "Amazon this weekend is providing record low prices on multiple models of the iPad mini 7, starting at $399.00 for the 128GB Wi-Fi tablet, down from $499.00.",
    url: "https://www.macrumors.com/2025/04/06/get-100-off-ipad-mini-7-2/",
    urlToImage:
      "https://images.macrumors.com/t/XkwKB075LHCd5uV7EfVigUMPEeI=/1920x/article-new/2024/10/ipad-mini-7-feature-red-and-blue.jpg",
    publishedAt: "2025-04-06T16:03:48Z",
    content:
      "Amazon this weekend is providing record low prices on multiple models of the iPad mini 7, starting at $399.00 for the 128GB Wi-Fi tablet, down from $499.00. \r\nNote: MacRumors is an affiliate partner … [+844 chars]",
  },
];

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

  // Load default articles when the app mounts
  useEffect(() => {
    setArticles(defaultArticles);
  }, []);

  // Mock function to toggle login status for testing
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

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
      {/* Dev-only login toggle button */}
      {process.env.NODE_ENV === "development" && (
        <button
          onClick={toggleLogin}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            padding: "10px",
            background: "#2f71e5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          DEV: Toggle Login ({isLoggedIn ? "Logged In" : "Logged Out"})
        </button>
      )}

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
            />
          }
        />
        <Route
          path="/saved-news"
          element={<SavedNews isLoggedIn={isLoggedIn} />}
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
