import classes from "./Button.module.css";

export default function Button(props) {
  // console.log("props", props);
  return (
    <button
      onClick={props.onClick}
      className={`${classes["btn"]} ${
        props.isLoading ? classes["curser-block"] : ""
      }`}
    >
      {props.children}
    </button>
  );
}
