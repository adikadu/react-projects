import { useState, useEffect } from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  const [fullInfo, setFullInfo] = useState(true);
  const isInfoGreater = props.info.length > 200;
  useEffect(() => {
    if (isInfoGreater) setFullInfo(false);
    else setFullInfo(true);
  }, [isInfoGreater]);

  const showToggleHandler = () => setFullInfo((prev) => !prev);

  let info;
  if (isInfoGreater) {
    if (fullInfo)
      info = (
        <p className={classes["tour-desc"]}>
          {props.info}{" "}
          <span onClick={showToggleHandler} className={classes["show"]}>
            ... show less
          </span>
        </p>
      );
    else
      info = (
        <p className={classes["tour-desc"]}>
          {props.info.substring(0, 200)}{" "}
          <span onClick={showToggleHandler} className={classes["show"]}>
            ... show more
          </span>
        </p>
      );
  } else info = <p className={classes["tour-desc"]}>{props.info}</p>;
  return (
    <div className={classes["card"]}>
      <img src={props.image} alt={props.name} />
      <div className={classes["tour-info"]}>
        <div className={classes["heading"]}>
          <h3>{props.name}</h3>
          <span>${props.price}</span>
        </div>

        {info}
        <button onClick={() => props.btnHandler(props.id)}>
          Not Intrested
        </button>
      </div>
    </div>
  );
}
