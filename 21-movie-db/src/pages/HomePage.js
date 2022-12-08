import MoviesContainer from "../components/MoviesContainer";
import store from "../store/store";
import { useContext, Fragment, useState } from "react";

let timer = null;
export default function HomePage() {
  const ctx = useContext(store);
  const [inpVal, setInpVal] = useState(ctx.movie);
  const inpChangeHandler = (e) => {
    setInpVal(e.target.value);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      ctx.dispatch({ type: "name", movie: e.target.value });
      clearTimeout(timer);
    }, 1500);
  };
  return (
    <Fragment>
      <h1>Search Movies</h1>
      <input
        type="text"
        onChange={inpChangeHandler}
        placeholder="Search movie..."
        value={inpVal}
      />
      <MoviesContainer />
    </Fragment>
  );
}
