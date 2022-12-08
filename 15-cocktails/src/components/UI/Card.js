import classes from "./Card.module.css";
import Button from "./Button";

export default function Card({ id, name, image, glass, alcoholic }) {
  return (
    <div className={classes["card"]}>
      <img src={image} alt={name} />
      <div className={classes["card-info"]}>
        <h3>{name}</h3>
        <span className={classes["glass"]}>{glass}</span>
        <span className={classes["alcoholic"]}>{alcoholic}</span>
        <Button to={`cocktail/${id}`}>Details</Button>
      </div>
    </div>
  );
}
