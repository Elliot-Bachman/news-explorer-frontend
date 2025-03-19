import React, { useState, useEffect } from "react";
import "./SavedNews.css";
import Preloader from "../Preloader/Preloader";

function SavedNews() {
  const [isLoading, setIsLoading] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);

  // Simulate loading for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // You would typically fetch saved articles from an API here
    }, 2000); // 2 seconds delay to demonstrate loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="saved-news">
      <div className="saved-news__container">
        <h1 className="saved-news__title">Saved Articles</h1>
        <p className="saved-news__description">
          This is where you can find all your saved news articles.
        </p>
        <div className="saved-news__content">
          {isLoading ? (
            <Preloader text="Loading saved articles..." />
          ) : savedArticles.length > 0 ? (
            <div className="saved-news__articles">
              {/* Saved articles would be displayed here */}
              <p>Your saved articles would be displayed here</p>
            </div>
          ) : (
            <p className="saved-news__empty-message">
              You don't have any saved articles yet. Browse for news and save
              the ones you like!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SavedNews;
