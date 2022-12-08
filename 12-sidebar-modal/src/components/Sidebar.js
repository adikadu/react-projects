import classes from "./Sidebar.module.css";
import { useContext, useState } from "react";
import store from "../store/store";

export default function Sidebar() {
  const ctx = useContext(store);
  const [slideOut, setSlideOut] = useState(false);
  const btnClickHandler = () => {
    setSlideOut(true);
    const timeout = setTimeout(() => {
      setSlideOut(false);
      clearTimeout(timeout);
      ctx.hidesidebarHandler();
    }, 1000);
  };
  return (
    <div
      className={`${classes["sidebar"]} ${classes["slide-in"]} ${
        slideOut ? classes["slide-out"] : ""
      }`}
    >
      <div className={classes["pos-btn"]}>
        <button onClick={btnClickHandler} className={classes["btn--close"]}>
          X
        </button>
      </div>
      <ul>
        <li>Home</li>
        <li>Team</li>
        <li>Projects</li>
        <li>Calender</li>
        <li>Documents</li>
      </ul>
    </div>
  );
}
