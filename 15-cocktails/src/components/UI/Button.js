import classes from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link className={classes["button"]} to={props.to}>
      {props.children}
    </Link>
  );
}
