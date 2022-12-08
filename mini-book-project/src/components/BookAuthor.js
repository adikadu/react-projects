import React from "react";
import classes from "./BookAuthor.module.css";

export default function BookAuthor(props) {
  return (
    <a className={classes["book-author"]} href={props.authorLink}>
      {props.author}
    </a>
  );
}
