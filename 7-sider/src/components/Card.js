import React from "react";
import classes from "./Card.module.css";
import { IoMdQuote } from "react-icons/io";

export default function Card(props) {
  return (
    <div className={classes["card"]} style={props.style}>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <span>{props.title}</span>
      <p>{props.quote}</p>
      <IoMdQuote />
    </div>
  );
}
