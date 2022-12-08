import classes from "./Movie.module.css";
import { Link } from "react-router-dom";

import React from "react";

export default function Movie(props) {
  return (
    <Link to={`movie/${props.id}`}>
      <div className={classes["movie"]}>
        <img src={props.poster} alt={props.movie} />
        <div className={classes["movie-info"]}>
          <span className={classes["movie-title"]}>{props.title}</span>
          <span className={classes["movie-year"]}>{props.year}</span>
        </div>
      </div>
    </Link>
  );
}
