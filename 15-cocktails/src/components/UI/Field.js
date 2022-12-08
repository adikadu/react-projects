import classes from "./Field.module.css";

export default function Field(props) {
  return (
    // <div className={classes["field"]}>
    //   <span className={classes["field-name"]}>{props.name}:</span>
    //   <span>{props.value}</span>
    // </div>
    <p className={classes["field"]}>
      <span>{props.name}:</span> {props.value}
    </p>
  );
}
