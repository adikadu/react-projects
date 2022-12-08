import classes from "./Input.module.css";
import { Fragment, useContext, useState } from "react";
import Button from "./Button";
import store from "../store/store";

let timeout = null;
export default function Input() {
  const ctx = useContext(store);
  const [inpVal, setInpVal] = useState(ctx.query);

  const inpchangeHandler = (e) => {
    setInpVal(e.target.value);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      ctx.setQuery(e.target.value);
      clearTimeout(timeout);
    }, 1000);
  };
  const prevBtnHandler = () => {
    if (ctx.isLoading) return;
    if (!ctx.currPage) ctx.setPage(ctx.numPages - 1);
    else ctx.setPage(ctx.currPage - 1);
  };
  const nextBtnHandler = () => {
    if (ctx.isLoading) return;
    if (ctx.currPage === ctx.numPages - 1) ctx.setPage(0);
    else ctx.setPage(ctx.currPage + 1);
  };

  return (
    <Fragment>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="news-search">Search Hacker News</label>
        <input
          onChange={inpchangeHandler}
          id="news-search"
          type="text"
          value={inpVal}
        />
      </form>
      <div className={classes["page-nav"]}>
        <Button onClick={prevBtnHandler} isLoading={ctx.isLoading}>
          Prev
        </Button>
        <p className={classes["page-num-info"]}>
          <span>{ctx.currPage + 1}</span> of <span>{ctx.numPages}</span>
        </p>
        <Button onClick={nextBtnHandler} isLoading={ctx.isLoading}>
          Next
        </Button>
      </div>
    </Fragment>
  );
}
