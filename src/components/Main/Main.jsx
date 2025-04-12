import React from "react";
import "./Main.css";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../Nothing found/Nothingfound";

function Main({
  articles,
  isLoading,
  error,
  noResults,
  visibleCount,
  setVisibleCount,
  isLoggedIn,
  onLoginClick,
}) {
  // Add a class that indicates if search results are being displayed
  const mainClass = articles.length > 0 ? "main with-results" : "main";

  return (
    <>
      <main className={mainClass}>
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
              ) : noResults ? (
                <NothingFound />
              ) : articles.length > 0 ? (
                <NewsCardList
                  articles={articles}
                  visibleCount={visibleCount}
                  setVisibleCount={setVisibleCount}
                  isLoggedIn={isLoggedIn}
                  onLoginClick={onLoginClick}
                />
              ) : null}
            </div>
          </section>
        </div>
      </main>

      {/* Wrap the About component with a div that has a specific class only for the main page */}
      <div className="main-page-about-wrapper">
        <About />
      </div>
    </>
  );
}

export default Main;
