import classes from "./Modal.module.css";
import { useContext } from "react";
import context from "../store/store";

export default function Modal() {
  const ctx = useContext(context);
  return (
    <div onClick={ctx.hideModalHandler} className={classes["backdrop"]}>
      <div className={classes["modal"]}>
        <p>{ctx.modalMessage}</p>
        <button onClick={ctx.hideModalHandler} className={classes["btn-close"]}>
          X
        </button>
      </div>
    </div>
  );
}
