import classes from "./Modal.module.css";
import { useContext } from "react";
import store from "../store/store";

export default function Modal() {
  const ctx = useContext(store);
  let correctPercent =
    (ctx.state.correctAnswers / ctx.state.questions.length) * 100;
  correctPercent = Math.round((correctPercent + Number.EPSILON) * 100) / 100;
  return (
    <div className={classes["backdrop"]}>
      <div className={classes["modal"]}>
        <h3>Congratulations!</h3>
        <p>You have answered {correctPercent}% of questions correctly</p>
        <button onClick={() => ctx.dispatch({ type: "resetQuiz" })}>
          Play again
        </button>
      </div>
    </div>
  );
}
