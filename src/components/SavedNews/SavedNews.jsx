import React from "react";
import "./SavedNews.css";

function SavedNews() {
  return (
    <div className="saved-news">
      <div className="saved-news__container">
        <h1 className="saved-news__title">Saved Articles</h1>
        <p className="saved-news__description">
          This is where you can find all your saved news articles.
        </p>
        <div className="saved-news__content">
          <p className="saved-news__empty-message">
            You don't have any saved articles yet. Browse for news and save the
            ones you like!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SavedNews;
