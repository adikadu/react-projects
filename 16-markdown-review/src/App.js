import classes from "./App.module.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [inpState, setInptState] = useState("# markdown preview");
  return (
    <div className={classes["app"]}>
      <textarea
        name="input-text"
        id="input-text"
        cols="30"
        rows="10"
        value={inpState}
        onChange={(e) => setInptState(e.target.value)}
      ></textarea>
      <ReactMarkdown className={classes["md-area"]}>{inpState}</ReactMarkdown>
    </div>
  );
}

export default App;
