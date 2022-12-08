import React from "react";
import classes from "./User.module.css";

export default function User(props) {
  return (
    <div className={classes["user"]}>
      <img src={props.image} alt={`${props.name}'s profile picture`} />
      <div className={classes["user-info"]}>
        <h3>{props.name}</h3>
        <span>{`${props.age} years`}</span>
      </div>
    </div>
  );
}
