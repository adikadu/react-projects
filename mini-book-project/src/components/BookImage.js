import React from "react";
import classes from "./BookImage.module.css";

export default function BookImage(props) {
  return (
    <img
      className={classes["book-img"]}
      src={props.imageUrl}
      alt={props.title}
    />
  );
}
