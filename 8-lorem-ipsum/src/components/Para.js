import classes from "./Para.module.css";

export default function Para(props) {
  return <p className={classes.para}>{props.data}</p>;
}
