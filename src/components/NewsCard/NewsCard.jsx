import React from "react";
import "./NewsCard.css";

function NewsCard({ article }) {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="news-card">
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="news-card__image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/images/news-placeholder.jpg";
          }}
        />
      )}
      <div className="news-card__content">
        <p className="news-card__date">{formatDate(publishedAt)}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source.name}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card__link"
      >
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
