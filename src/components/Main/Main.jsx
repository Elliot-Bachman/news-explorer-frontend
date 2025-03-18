import React from "react";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <section className="main__section">
          <h2 className="main__title">Search Results</h2>
          <div className="main__content">
            <p className="main__empty-message">
              Use the search bar above to find news articles
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
