import React, { useState, useEffect } from "react";
import "./Main.css";
import Preloader from "../Preloader/Preloader";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasResults, setHasResults] = useState(false);

  // Simulate loading for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay to demonstrate loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      <div className="main__container">
        <section className="main__section">
          <h2 className="main__title">Search Results</h2>
          <div className="main__content">
            {isLoading ? (
              <Preloader text="Searching for news..." />
            ) : hasResults ? (
              <div className="main__results">
                {/* News results would go here */}
                <p>News articles would be displayed here</p>
              </div>
            ) : (
              <p className="main__empty-message">
                Use the search bar above to find news articles
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
