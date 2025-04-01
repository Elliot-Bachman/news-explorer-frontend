import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles }) {
  return (
    <div className="news-card-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsCardList;
