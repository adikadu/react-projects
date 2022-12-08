import classes from "./App.module.css";
import { useState, useRef } from "react";
import Para from "./components/Para";
import data from "./data";

function App() {
  const [num, setNum] = useState(0);
  const inpRef = useRef();
  const formHandler = (event) => {
    event.preventDefault();
    setNum(+inpRef.current.value);
  };
  return (
    <main>
      <h1 className={classes["heading"]}>TIRED OF BORING LOREM IPSUM?</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="inp-num">Paragraphs:</label>
        <input
          ref={inpRef}
          type="number"
          id="inp-num"
          min={0}
          max={8}
          step={1}
        />
        <button>Generate</button>
      </form>
      {Array.from(Array(num), (e, i) => (
        <Para key={i} data={data[i]} />
      ))}
    </main>
  );
}

export default App;
