import classes from "./App.module.css";
import Card from "./components/Card";
import reviews from "./data";
import { useState } from "react";

function App() {
  const [currIdx, setCurridx] = useState(0);

  const btnLtHandler = () => {
    setCurridx((prev) => {
      prev--;
      if (prev < 0) prev = reviews.length - 1;
      return prev;
    });
  };
  const btnRtHandler = () => {
    setCurridx((prev) => {
      prev++;
      if (prev === reviews.length) prev = 0;
      return prev;
    });
  };

  const surpriseHandler = () => {
    setCurridx((prev) => Math.floor(Math.random() * reviews.length));
  };

  return (
    <main>
      <div className={classes["container"]}>
        <h1 className={classes["heading"]}>Our Reviews</h1>
        <hr />
        <div className={classes["container-body"]}>
          <Card {...reviews[currIdx]} />
          <div className={classes["btns"]}>
            <button onClick={btnLtHandler} className={classes["btn"]}>
              &lt;&lt;
            </button>
            <button onClick={btnRtHandler} className={classes["btn"]}>
              &gt;&gt;
            </button>
          </div>
          <button
            onClick={surpriseHandler}
            className={classes["btn--surprise"]}
          >
            Surprise Me
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
