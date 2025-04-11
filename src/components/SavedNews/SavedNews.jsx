import React, { useState, useEffect } from "react";
import "./SavedNews.css";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ isLoggedIn }) {
  const [isLoading, setIsLoading] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);

  const loadSavedArticles = () => {
    const articles = JSON.parse(localStorage.getItem("savedArticles") || "[]");
    setSavedArticles(articles);
    setIsLoading(false);
  };

  useEffect(() => {
    // Add a small delay to simulate loading for demonstration purposes
    const timer = setTimeout(() => {
      loadSavedArticles();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Listen for changes to localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      loadSavedArticles();
    };

    window.addEventListener("storage", handleStorageChange);

    // We'll also listen for a custom event that our NewsCard component dispatches
    window.addEventListener("articleRemoved", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("articleRemoved", handleStorageChange);
    };
  }, []);

  const handleRemoveArticle = (articleToRemove) => {
    const updatedArticles = savedArticles.filter(
      (article) => article.title !== articleToRemove.title
    );
    setSavedArticles(updatedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
  };

  return (
    <div className="saved-news">
      <div className="saved-news__container">
        <h1 className="saved-news__title">Saved Articles</h1>
        <p className="saved-news__description">
          Your favorite news articles, all in one place.
        </p>
        <div className="saved-news__content">
          {isLoading ? (
            <Preloader text="Loading saved articles..." />
          ) : savedArticles.length > 0 ? (
            <div className="saved-news__articles">
              {savedArticles.map((article, index) => (
                <NewsCard
                  key={`${article.title}-${index}`}
                  article={article}
                  isLoggedIn={isLoggedIn}
                  isSaved={true}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SavedNews;
