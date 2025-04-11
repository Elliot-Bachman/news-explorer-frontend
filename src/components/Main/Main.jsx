import React from "react";
import "./Main.css";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({
  articles,
  isLoading,
  error,
  noResults,
  visibleCount,
  setVisibleCount,
  isLoggedIn,
}) {
  return (
    <main className="main">
      <div className="main__container">
        <section className="main__section">
          {articles.length > 0 && (
            <h2 className="main__title">Search results</h2>
          )}
          <div className="main__content">
            {isLoading ? (
              <Preloader text="Searching for news..." />
            ) : error ? (
              <p className="error">{error}</p>
            ) : noResults ? null : articles.length > 0 ? (
              <NewsCardList
                articles={articles}
                visibleCount={visibleCount}
                setVisibleCount={setVisibleCount}
                isLoggedIn={isLoggedIn}
              />
            ) : null}
          </div>
        </section>

        {/* About section */}
        <About />
      </div>
    </main>
  );
}

export default Main;
