import classes from "./CocktailDetails.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import store from "../store/store";
import Field from "./UI/Field";
import Button from "./UI/Button";

export default function CocktailDetails() {
  const params = useParams();
  const ctx = useContext(store);
  if (ctx.isLoading)
    return (
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>Loading...</h1>
    );

  let drinkDetails = ctx.cocktails.filter(
    (drink) => drink.idDrink === params.id
  );
  if (!drinkDetails.length)
    return (
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
        Something went wrong :(
      </h1>
    );
  drinkDetails = drinkDetails[0];
  let ingredients = "";
  for (let i = 1; i <= 15; i++) {
    if (drinkDetails[`strIngredient${i}`] === null) break;
    if (i === 1) ingredients += `${drinkDetails[`strIngredient${i}`]}`;
    else ingredients += `, ${drinkDetails[`strIngredient${i}`]}`;
  }
  return (
    <section className={classes["cocktail-details"]}>
      <Button to="/">Back Home</Button>
      <h1>{drinkDetails.strDrink}</h1>
      <div className={classes["drink-details"]}>
        <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink} />
        <div className={classes["drink-info"]}>
          <Field name="Name" value={drinkDetails.strDrink} />
          <Field name="Category" value={drinkDetails.strCategory} />
          <Field name="Info" value={drinkDetails.strAlcoholic} />
          <Field name="Glass" value={drinkDetails.strGlass} />
          <Field name="Instructions" value={drinkDetails.strInstructions} />
          <Field name="Ingredients" value={ingredients} />
        </div>
      </div>
    </section>
  );
}
