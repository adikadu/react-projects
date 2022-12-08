import classes from "./Info.module.css";
import { useSelector } from "react-redux";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Info() {
  const info = useSelector((state) => {
    if (state.info)
      return state.info.filter((data) => data.id === state.currentActive)[0];
  });
  if (!info) return;
  return (
    <div className={classes["info"]}>
      <h3>{info.title}</h3>
      <span className={classes["company"]}>{info.company}</span>
      <br />
      <span className={classes["dates"]}>{info.dates}</span>
      <ul>
        {info.duties.map((duty, idx) => (
          <li key={idx}>
            <FaAngleDoubleRight
              className={classes["icon-arrow"]}
            ></FaAngleDoubleRight>
            <p>{duty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
