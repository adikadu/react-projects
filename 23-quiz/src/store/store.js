import { createContext } from "react";

const store = createContext({
  isLoading: false,
  dispatch: () => {},
  error: null,
  state: {
    metadata: { amount: 0, category: null, difficulty: null },
    questions: [],
    currentQuestion: 0,
    correctAnswers: 0,
    startQuiz: false,
  },
});

export default store;
