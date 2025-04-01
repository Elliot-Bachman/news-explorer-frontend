import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles, visibleCount, setVisibleCount, isLoggedIn }) {
  return (
    <div className="news-card-list-container">
      <div className="news-card-list">
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard
            key={article.url || index}
            article={article}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>

      {visibleCount < articles.length && (
        <button
          className="news-card-list__show-more"
          onClick={() => setVisibleCount(visibleCount + 3)}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
