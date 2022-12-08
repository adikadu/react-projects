import classes from "./PageNotFound.module.css";
import Button from "./UI/Button";

export default function PageNotFound() {
  return (
    <div className={classes["page-not-found"]}>
      <h1>Seems like you are lost!</h1>
      <Button to="/">Go Back Home</Button>
    </div>
  );
}
