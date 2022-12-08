import store from "./store";
import { useEffect, useReducer, useState } from "react";

const BASE_URL = "https://opentdb.com/api.php?";

const INITIAL_STATE = {
  metadata: { amount: 0, category: null, difficulty: null },
  questions: [],
  currentQuestion: 0,
  correctAnswers: 0,
  startQuiz: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateMetadata":
      return { ...state, metadata: action.payload };

    case "initData":
      return { ...state, questions: action.payload };

    case "updateCorrectAnswers":
      return { ...state, correctAnswers: state.correctAnswers + 1 };

    case "updateCurrentQuestion":
      return {
        ...state,
        currentQuestion:
          state.currentQuestion < state.questions.length
            ? state.currentQuestion + 1
            : state.currentQuestion,
      };

    case "updateStartQuiz":
      return { ...state, startQuiz: true };

    case "resetQuiz":
      return INITIAL_STATE;

    default:
      throw new Error("No Condition matched in reducer!");
  }
};

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (
      !state.metadata.amount ||
      !state.metadata.category ||
      !state.metadata.difficulty
    )
      return;

    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${BASE_URL}amount=${state.metadata.amount}&category=${state.metadata.category}&difficulty=${state.metadata.difficulty}&type=multiple`
        );
        const data = await res.json();
        setIsLoading(false);
        if (data.response_code === 2 || !data.results.length)
          throw new Error("Bad request!");
        // console.log("data", data);
        const payload = data.results.map((que) => ({
          question: que.question,
          options: shuffle([que.correct_answer, ...que.incorrect_answers]),
          correctAnswer: que.correct_answer,
        }));
        dispatch({ type: "initData", payload });
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    })();
  }, [state.metadata]);

  return (
    <store.Provider
      value={{
        isLoading,
        dispatch,
        error,
        state,
      }}
    >
      {props.children}
    </store.Provider>
  );
}
