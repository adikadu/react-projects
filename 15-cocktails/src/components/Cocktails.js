import classes from "./Cocktails.module.css";
import Card from "./UI/Card";
import { useContext, Fragment } from "react";
import store from "../store/store";

export default function Cocktails() {
  const ctx = useContext(store);
  if (!ctx.cocktails) return <h2>No Cocktails found :(</h2>;
  return (
    <Fragment>
      <h2>Cocktails</h2>
      <div className={classes["drinks"]}>
        {ctx.cocktails.map((drink) => (
          <Card
            key={drink.idDrink}
            id={drink.idDrink}
            name={drink.strDrink}
            image={drink.strDrinkThumb}
            glass={drink.strGlass}
            alcoholic={drink.strAlcoholic}
          />
        ))}
      </div>
    </Fragment>
  );
}
