import classes from "./App.module.css";
import articles from "./data";
import { useState } from "react";

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);
  // console.log("toggleTheme", toggleTheme);
  return (
    <main className={toggleTheme && classes["dark-theme"]}>
      {/* <main className={classes["dark-theme"]}> */}
      <section className={classes["top"]}>
        <h1>Overreacted</h1>
        <button onClick={() => setToggleTheme((prev) => !prev)}>Toggle</button>
      </section>
      <section className={classes["articles"]}>
        {articles.map((article) => (
          <div key={article.id} className={classes["article"]}>
            <h2>{article.title}</h2>
            <div className={classes["time-details"]}>
              <span>{article.date.toDateString()}</span>
              <span>{article.length} min read</span>
            </div>
            <p>{article.snippet}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
