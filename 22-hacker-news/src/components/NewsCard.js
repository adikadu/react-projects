import classes from "./NewsCard.module.css";
import store from "../store/store";
import { useContext } from "react";

export default function NewsCard(props) {
  const ctx = useContext(store);
  return (
    <div className={classes["news-card"]}>
      <h3>{props.title}</h3>
      <p>
        {props.points} by {props.author} | {props.numComments} comments
      </p>
      <a href={props.readMoreLink} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <span onClick={() => ctx.dispatch({ type: "remove", id: props.id })}>
        Remove
      </span>
    </div>
  );
}
