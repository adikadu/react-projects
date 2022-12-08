import React from "react";
import { rgbToHex } from "../util";
import classes from "./SingleColor.module.css";
import { useState } from "react";

export default function SingleColor(props) {
  const [showCopyText, setShowCopyText] = useState(false);
  const hex = rgbToHex(props.rgb);
  const style = {
    backgroundColor: hex,
    color: props.type === "tint" ? "black" : "white",
  };

  const colorClickHandler = () => {
    navigator.clipboard.writeText(hex);
    setShowCopyText(true);
    const timeout = setTimeout(() => {
      setShowCopyText(false);
      clearTimeout(timeout);
    }, 1000);
  };
  return (
    <div
      onClick={colorClickHandler}
      className={classes["single-color"]}
      style={style}
    >
      <span>{props.weight}%</span>
      <span>{hex}</span>
      {showCopyText && (
        <span className={classes["copied"]}>copied to clipboard</span>
      )}
    </div>
  );
}
