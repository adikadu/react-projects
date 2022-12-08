import store from "./store";
import { useState, useEffect } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export default function ContextProvider(props) {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchCocktail, setSearchCocktail] = useState("");
  const [inpVal, setInpVal] = useState("");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(URL + searchCocktail);
      const data = await res.json();
      setCocktails(data.drinks);
      setIsLoading(false);
    })();
  }, [searchCocktail]);
  return (
    <store.Provider
      value={{ isLoading, cocktails, setSearchCocktail, inpVal, setInpVal }}
    >
      {props.children}
    </store.Provider>
  );
}
