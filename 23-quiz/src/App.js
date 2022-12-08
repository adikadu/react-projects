import { useContext } from "react";
import store from "./store/store";
import Form from "./components/Form";
import Loading from "./UI/Loading";
import QuestionCard from "./components/QuestionCard";
import Modal from "./UI/Modal";

function App() {
  const ctx = useContext(store);
  if (!ctx.state.startQuiz) return <Form />;
  if (ctx.isLoading) return <Loading />;
  if (ctx.state.currentQuestion === ctx.state.questions.length - 1)
    return <Modal />;
  return <QuestionCard />;
}

export default App;
