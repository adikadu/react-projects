import classes from "./App.module.css";
import Card from "./components/Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import data from "./data";
import { useState, useEffect } from "react";

function App() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const timeout = setInterval(btnRtHandler, 3000);
    return () => {
      clearInterval(timeout);
    };
  }, [current]);

  const btnLtHandler = () =>
    setCurrent((prev) => {
      prev--;
      if (!prev) prev = data.length;
      return prev;
    });

  const btnRtHandler = () =>
    setCurrent((prev) => {
      prev++;
      if (prev > data.length) prev = 1;
      return prev;
    });

  return (
    <main className={classes["main"]}>
      <h1>
        <span>/</span> Reviews
      </h1>
      <div className={classes["disp-hid"]}>
        {data.map((entry) => (
          <Card
            key={entry.id}
            {...entry}
            style={{
              transform: `translateX(${(entry.id - current) * 100}%)`,
            }}
          />
        ))}
      </div>
      <button onClick={btnLtHandler} className={classes["btn--left"]}>
        <FiChevronLeft className={classes["icon"]} />
      </button>
      <button onClick={btnRtHandler} className={classes["btn--right"]}>
        <FiChevronRight className={classes["icon"]} />
      </button>
    </main>
  );
}

export default App;
