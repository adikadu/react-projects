import { useEffect, useReducer } from "react";
import store from "./store";
import useFetch from "../hooks/useFetch";
export const BASE_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_API_KEY}`;
export const NO_POSTER_AVALIABLE =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, movie: action.movie };
    case "movieList":
      if (action.movieList) return { ...state, movieList: action.movieList };
      return state;
    case "response":
      return {
        ...state,
        response: {
          status: action.response.status,
          error: action.response.error,
        },
      };
    default:
      throw new Error("Invalid key in switch case");
  }
};

export default function ContextProvider(props) {
  const [movieInfo, dispatch] = useReducer(reducer, {
    movie: "batman",
    response: { status: true, error: "" },
    movieList: [],
  });

  const { data, setUrl, isLoading } = useFetch();
  useEffect(() => {
    setUrl(`${BASE_URL}&s=${movieInfo.movie}`);
  }, [movieInfo.movie, setUrl]);

  useEffect(() => {
    if (!data) return;
    dispatch({
      type: "response",
      response: {
        status: data.Response === "True" ? true : false,
        error: data.Response === "False" ? data.Error : "",
      },
    });
    dispatch({ type: "movieList", movieList: data.Search });
  }, [data]);
  return (
    <store.Provider value={{ ...movieInfo, dispatch, isLoading }}>
      {props.children}
    </store.Provider>
  );
}
