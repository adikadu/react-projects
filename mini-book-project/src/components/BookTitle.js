import React from "react";
import classes from "./BookTitle.module.css";

export default function BookTitle(props) {
  return <h2 className={classes["book-title"]}>{props.title}</h2>;
}
