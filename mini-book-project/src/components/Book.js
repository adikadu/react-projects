import React from "react";
import classes from "./Book.module.css";
import BookImage from "./BookImage";
import BookTitle from "./BookTitle";
import BookAuthor from "./BookAuthor";

export default function Book(props) {
  return (
    <div className={classes["book"]}>
      <BookImage imageUrl={props.imageUrl} title={props.title} />
      <div className={classes["book-desc"]}>
        <BookTitle title={props.title} />
        <BookAuthor author={props.author} authorLink={props.authorLink} />
      </div>
    </div>
  );
}
