import { createContext } from "react";

const store = createContext({
  isLoading: false,
  cocktails: [],
  setSearchCocktail: () => {},
  inpVal: "",
  setInpVal: () => {},
});

export default store;
