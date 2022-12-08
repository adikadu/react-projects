import { useReducer, useEffect } from "react";
import store from "./store";
import useFetch from "../hooks/useFetch";

const reducer = (state, action) => {
  // console.log("action", action);
  switch (action.type) {
    case "initNews":
      return action.data;
    case "remove":
      return {
        ...state,
        news: state.news.filter((item) => item.objectID !== action.id),
      };
    default:
      throw new Error("Invalid input to reducer!");
  }
};

export default function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    query: "react",
    news: [],
    currPage: 0,
    numPages: 0,
    numHitsPerPage: null,
  });
  const { isLoading, data, setQuery, setPage } = useFetch();
  useEffect(() => {
    if (isLoading || !data) return;
    dispatch({
      type: "initNews",
      data: {
        query: data.query,
        news: data.hits,
        currPage: data.page,
        numPages: data.nbPages,
        numHitsPerPage: data.hitsPerPage,
      },
    });
  }, [isLoading, data]);

  // console.log("data", data);
  // console.log("state", state);
  return (
    <store.Provider
      value={{ ...state, isLoading, dispatch, setQuery, setPage }}
    >
      {props.children}
    </store.Provider>
  );
}
