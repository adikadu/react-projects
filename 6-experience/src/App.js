import classes from "./App.module.css";
import SideBar from "./components/SideBar";
import Info from "./components/Info";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getExperienceAction } from "./store/store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperienceAction());
  }, [dispatch]);
  return (
    <main>
      <h1 className={classes["heading"]}>Experience</h1>
      <hr />
      <div className={classes["content"]}>
        <SideBar />
        <Info />
      </div>
      <button className={classes["btn--more-info"]}>More Info</button>
    </main>
  );
}

export default App;
