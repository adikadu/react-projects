import { createContext } from "react";

const store = createContext({
  movie: "",
  movieList: [],
  response: {},
  dispatch: () => {},
  isLoading: false,
});

export default store;
