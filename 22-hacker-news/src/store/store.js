import { createContext } from "react";

const store = createContext({
  query: "",
  news: [],
  currPage: 0,
  numPages: 50,
  isLoading: false,
  dispatch: () => {},
  setQuery: () => {},
  setPage: () => {},
});

export default store;
