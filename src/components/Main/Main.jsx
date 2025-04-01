import React from "react";
import "./Main.css";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ articles, isLoading, error, noResults }) {
  return (
    <main className="main">
      <div className="main__container">
        <section className="main__section">
          {articles.length > 0 && (
            <h2 className="main__title">Search Results</h2>
          )}
          <div className="main__content">
            {isLoading ? (
              <Preloader text="Searching for news..." />
            ) : error ? (
              <p className="main__error-message">{error}</p>
            ) : noResults ? (
              <p className="main__empty-message">
                Nothing found for your search. Please try again with different
                keywords.
              </p>
            ) : articles.length > 0 ? (
              <NewsCardList articles={articles} />
            ) : (
              <p className="main__empty-message">
                Use the search bar above to find news articles
              </p>
            )}
          </div>
        </section>

        {/* About section */}
        <About />
      </div>
    </main>
  );
}

export default Main;
