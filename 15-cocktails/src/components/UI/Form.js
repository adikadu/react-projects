import classes from "./Form.module.css";
import { useContext, useRef } from "react";
import store from "../../store/store";

export default function Form() {
  const inpRef = useRef();
  const ctx = useContext(store);
  const inpChangeHandler = () => {
    ctx.setInpVal(inpRef.current.value);
    ctx.setSearchCocktail(inpRef.current.value);
  };
  return (
    <div className={classes["form"]}>
      <label htmlFor="drink-name">Search Your Favorite Cocktail</label>
      <input
        id="drink-name"
        type="text"
        ref={inpRef}
        value={ctx.inpVal}
        onChange={inpChangeHandler}
        autoFocus
      />
    </div>
  );
}
