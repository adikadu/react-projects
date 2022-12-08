import classes from "./Form.module.css";
import { useRef, useContext } from "react";
import store from "../store/store";

export default function Form() {
  const numQueRef = useRef();
  const categoryRef = useRef();
  const difficultyRef = useRef();

  const ctx = useContext(store);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    ctx.dispatch({
      type: "updateMetadata",
      payload: {
        amount: numQueRef.current.value,
        category: categoryRef.current.value,
        difficulty: difficultyRef.current.value,
      },
    });
    ctx.dispatch({ type: "updateStartQuiz" });
  };

  return (
    <div className={classes["cover-screen"]}>
      <div className={classes["selection-form"]}>
        <h1>Setup Quiz</h1>
        <form className={classes["form"]} onSubmit={formSubmitHandler}>
          <label htmlFor="num-questions">Number of Questions</label>
          <input
            ref={numQueRef}
            type="number"
            id="num-questions"
            min={10}
            max={25}
            step={1}
            defaultValue={10}
          />

          <label htmlFor="category">Category</label>
          <select ref={categoryRef} list="category" id="category">
            <option value={21}>Sports</option>
            <option value={23}>History</option>
            <option value={24}>Politics</option>
          </select>

          <label htmlFor="difficulty">Difficulty</label>
          <select ref={difficultyRef} list="difficulty-types" id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button>Start</button>
        </form>
      </div>
    </div>
  );
}
