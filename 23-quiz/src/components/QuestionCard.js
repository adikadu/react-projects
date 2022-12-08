import classes from "./QuestionCard.module.css";
import { useContext, useRef, createRef } from "react";
import store from "../store/store";

export default function QuestionCard() {
  const ctx = useContext(store);
  const inpRefs = useRef([]);
  if (ctx.state.currentQuestion >= ctx.state.questions.length) return;
  const currQue = ctx.state.questions[ctx.state.currentQuestion];
  inpRefs.current = currQue.options.map((option, i) =>
    (inpRefs.current[i] = createRef)()
  );
  const formSubmitHandler = (e) => {
    e.preventDefault();
    inpRefs.current.forEach((ref) => {
      if (ref.current.checked && ref.current.value === currQue.correctAnswer) {
        ctx.dispatch({ type: "updateCorrectAnswers" });
        return;
      }
    });
    ctx.dispatch({ type: "updateCurrentQuestion" });
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes["question-card"]}>
      <p>
        Correct Answers : {ctx.state.correctAnswers}/
        {ctx.state.currentQuestion + 1}
      </p>
      <h1>{currQue.question}</h1>
      {currQue.options.map((option, idx) => (
        <div key={idx} className={classes["input"]}>
          <label htmlFor={option}>{option}</label>
          <input
            ref={inpRefs.current[idx]}
            type="radio"
            id={option}
            value={option}
          />
        </div>
      ))}

      <button>Next Question</button>
    </form>
  );
}
