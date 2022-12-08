import classes from "./App.module.css";
import Values from "values.js";
import { useState, useEffect, useReducer, useRef } from "react";
import SingleColor from "./components/SingleColor";
import { validate } from "./util";
import { Fragment } from "react";

const colorReducer = (state, action) => {
  const tints = [];
  const base = [];
  const shades = [];
  action.forEach((color) => {
    switch (color.type) {
      case "tint": {
        tints.push(color);
        break;
      }
      case "base": {
        base.push(color);
        break;
      }
      case "shade": {
        shades.push(color);
        break;
      }
      default:
        break;
    }
  });
  return {
    tints: tints,
    base: base,
    shades: shades,
  };
};

function App() {
  const inpRef = useRef();
  const [valuesList, setValuesList] = useState(new Values("#f15025").all(10));
  const [invalidInp, setInvalidInp] = useState(false);
  const [colors, dispatchColors] = useReducer(colorReducer, {
    tints: [],
    base: [],
    shades: [],
  });

  useEffect(() => {
    dispatchColors(valuesList);
  }, [valuesList]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const inp = inpRef.current.value;
    inpRef.current.value = "";
    const isValid = validate(inp);
    setInvalidInp(!isValid);
    if (!isValid) return;
    setValuesList(new Values(inp).all(10));
  };
  let body = (
    <Fragment>
      <h2>Tint</h2>
      <div className={classes["colors"]}>
        {colors.tints.map((value, idx) => (
          <SingleColor key={idx} {...value} />
        ))}
      </div>
      <h2>Base</h2>
      <div className={classes["colors"]}>
        {colors.base.map((value, idx) => (
          <SingleColor key={idx} {...value} />
        ))}
      </div>
      <h2>Shade</h2>
      <div className={classes["colors"]}>
        {colors.shades.map((value, idx) => (
          <SingleColor key={idx} {...value} />
        ))}
      </div>
    </Fragment>
  );
  if (invalidInp) body = <h1>Invalid input :(</h1>;
  return (
    <main>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="inp">Color Generator</label>
        <input
          className={invalidInp ? classes["invalid"] : ""}
          id="inp"
          ref={inpRef}
          type="text"
          placeholder="#f15025"
          minLength={7}
          maxLength={7}
        />
        <button>Submit</button>
      </form>
      {body}
    </main>
  );
}

export default App;
