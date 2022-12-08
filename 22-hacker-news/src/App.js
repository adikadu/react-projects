import classes from "./App.module.css";
import Input from "./components/Input";
import News from "./components/News";

function App() {
  return (
    <main className={classes["all-content"]}>
      <Input />
      <News />
    </main>
  );
}

export default App;
