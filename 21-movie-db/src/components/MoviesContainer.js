import classes from "./MoviesContainer.module.css";
import store from "../store/store";
import { useContext, Fragment } from "react";
import Movie from "./Movie";
import Loading from "./Loading";
import { NO_POSTER_AVALIABLE } from "../store/ContextProvider";

function MoviesContainer() {
  const ctx = useContext(store);

  if (ctx.isLoading) return <Loading />;
  return (
    <Fragment>
      {!ctx.response.status && (
        <span className={classes["error-msg"]}>{ctx.response.error}</span>
      )}
      <div className={classes["container-movies"]}>
        {ctx.movieList.map((movie) => (
          <Movie
            key={movie.imdbID}
            poster={movie.Poster === "N/A" ? NO_POSTER_AVALIABLE : movie.Poster}
            title={movie.Title}
            year={movie.Year}
            id={movie.imdbID}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default MoviesContainer;
