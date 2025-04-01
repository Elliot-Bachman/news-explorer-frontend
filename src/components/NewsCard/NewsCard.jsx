import React from "react";
import { formatDate } from "../../utils/helpers";
import "./NewsCard.css";

function NewsCard({ article, isLoggedIn, isSaved = false }) {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  const handleSaveArticle = () => {
    // In a real app, this would call an API to save the article
    console.log("Saving article:", title);

    // For demo purposes, we can save to localStorage
    const savedArticles = JSON.parse(
      localStorage.getItem("savedArticles") || "[]"
    );

    // Check if article is already saved to avoid duplicates
    const isAlreadySaved = savedArticles.some(
      (savedArticle) => savedArticle.title === title
    );

    if (!isAlreadySaved) {
      savedArticles.push(article);
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
      alert("Article saved!"); // Provide feedback to user
    } else {
      alert("This article is already saved.");
    }
  };

  const handleRemoveArticle = () => {
    console.log("Removing article:", title);

    // Remove from localStorage
    const savedArticles = JSON.parse(
      localStorage.getItem("savedArticles") || "[]"
    );
    const updatedArticles = savedArticles.filter(
      (savedArticle) => savedArticle.title !== title
    );
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));

    // Provide feedback
    alert("Article removed!");

    // Dispatch a custom event to notify components that an article was removed
    window.dispatchEvent(
      new CustomEvent("articleRemoved", { detail: { title } })
    );
  };

  const renderActionButton = () => {
    if (!isLoggedIn) return null;

    if (isSaved) {
      return (
        <button
          className="news-card__button news-card__button--remove"
          onClick={handleRemoveArticle}
        >
          Remove
        </button>
      );
    } else {
      return (
        <button className="news-card__save-button" onClick={handleSaveArticle}>
          Save
        </button>
      );
    }
  };

  // Format the date to be more readable
  const formattedDate = formatDate(publishedAt);

  return (
    <div className="news-card">
      {urlToImage && (
        <div className="news-card__image-container">
          <img
            className="news-card__image"
            src={urlToImage}
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/400x200?text=No+Image+Available";
            }}
          />
        </div>
      )}
      {renderActionButton()}
      <div className="news-card__content">
        <p className="news-card__date">{formattedDate}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source?.name}</p>
        <a
          className="news-card__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
