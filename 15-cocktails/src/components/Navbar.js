import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={classes["nav"]}>
      <Link to="/">
        <h3 className={classes["logo"]}>
          The <span>Cocktail</span> DB
        </h3>
      </Link>
      <ul className={classes["links"]}>
        <li className={classes["link"]}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes["link"]}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
