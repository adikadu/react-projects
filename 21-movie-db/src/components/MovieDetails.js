import classes from "./MovieDetails.module.css";
import { useContext, useEffect, useState } from "react";
import store from "../store/store";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";
import { BASE_URL, NO_POSTER_AVALIABLE } from "../store/ContextProvider";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();
  const params = useParams();
  const ctx = useContext(store);
  const { data, setUrl, isLoading } = useFetch();

  useEffect(() => {
    let details = ctx.movieList.filter(
      (movie) => movie.imdbID === params.movieId
    );
    if (!details.length) {
      setMovieDetails(null);
      return;
    }
    details = details[0];
    setUrl(`${BASE_URL}&t=${details.Title}&plot=full`);
  }, [ctx.movieList, params.movieId, setUrl]);

  useEffect(() => {
    setMovieDetails(data);
  }, [data]);

  if (isLoading) return <Loading />;
  if (!movieDetails)
    return <h1 className={classes["error-msg"]}>Movie details not found</h1>;

  return (
    <div className={classes["movie-details-container"]}>
      <img
        src={
          movieDetails.Poster === "N/A"
            ? NO_POSTER_AVALIABLE
            : movieDetails.Poster
        }
        alt={movieDetails.Title}
      />
      <div className={classes["info"]}>
        <h2>{movieDetails.Title}</h2>
        <ul className={classes["genre-list"]}>
          {movieDetails.Genre.split(",").map((val, idx) => (
            <li key={idx}>{val.trim()}</li>
          ))}
        </ul>
        <p>{movieDetails.Plot}</p>
        <span>{movieDetails.Year}</span>
        <Link to="/">Back To Movies</Link>
      </div>
    </div>
  );
}
