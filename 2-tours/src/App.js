import classes from "./App.module.css";
import Card from "./components/Card";
import { useEffect, useState, useReducer } from "react";

const URL = "https://course-api.com/react-tours-project";

const reducer = (state, action) => {
  if (action.type === "initialize") {
    return { toursList: action.data, numTours: action.data.length };
  }
  if (action.type === "update") {
    const newToursList = state.toursList.filter(
      (tour) => tour.id !== action.id
    );
    return { ...state, toursList: newToursList };
  }
};

function App() {
  const [tours, dispatch] = useReducer(reducer, { toursList: [], numTours: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(URL);
    const data = await res.json();
    setIsLoading(false);
    dispatch({ type: "initialize", data });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const removeCardHandler = (id) => {
    dispatch({ type: "update", id });
  };

  if (isLoading) return <h1 className={classes["loading"]}>Loading...</h1>;

  if (!tours.numTours)
    return <h1 className={classes["loading"]}>We don't have any tours</h1>;

  return (
    <main>
      <div className={classes["container"]}>
        <h1>{tours.length ? "Our Tours" : "No Tours Left"}</h1>
        <hr />
        {tours.toursList.length > 0 &&
          tours.toursList.map((tour) => (
            <Card key={tour.id} {...tour} btnHandler={removeCardHandler} />
          ))}
        {!tours.toursList.length && (
          <button
            onClick={() => fetchData()}
            className={classes["btn-refresh"]}
          >
            Refresh
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
