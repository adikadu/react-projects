import classes from "./MenuItem.module.css";

export default function MenuItem(props) {
  return (
    <div className={classes["item"]}>
      <img src={props.img} alt={props.title} />
      <div className={classes["menu-info"]}>
        <div className={classes["title-price"]}>
          <h3>{props.title}</h3>
          <span>${Math.round(props.price)}</span>
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
