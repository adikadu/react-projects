import classes from "./SideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { experienceActions } from "../store/store";

export default function SideBar() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => {
    if (state.info)
      return state.info.map((info) => ({ id: info.id, company: info.company }));
  });
  const currentActive = useSelector((state) => state.currentActive);
  const clickHandler = (event) =>
    dispatch(experienceActions.changeCurrentActive(event.target.dataset.id));
  return (
    <div className={classes["side-bar"]}>
      {companies &&
        companies.map((company) => (
          <span
            onClick={clickHandler}
            key={company.id}
            className={`${classes["company"]} ${
              company.id === currentActive ? classes["active"] : ""
            }`}
            data-id={company.id}
          >
            {company.company}
          </span>
        ))}
    </div>
  );
}
