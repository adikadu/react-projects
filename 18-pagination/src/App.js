import classes from "./App.module.css";
import useFetch from "./hooks/useFetch";
import Card from "./components/Card";
import { Fragment, useState, useEffect } from "react";

const followersPerPage = 10;
function App() {
  const { isLoading, data } = useFetch();
  const [currPage, setCurrPage] = useState(0);
  const [btnActive, setBtnActive] = useState(false);
  const [currData, setCurrData] = useState([]);
  let numberOfPages;
  if (!isLoading) numberOfPages = Math.ceil(data.length / followersPerPage);
  useEffect(() => {
    if (isLoading) return;
    const start = currPage * followersPerPage;
    setCurrData(data.slice(start, start + followersPerPage));
  }, [isLoading, data, currPage]);
  if (isLoading) return <h1>Loading...</h1>;

  const prevBtnHandler = () => {
    setBtnActive(true);
    setCurrPage((prev) => {
      prev--;
      if (prev < 0) prev = numberOfPages - 1;
      return prev;
    });
  };
  const nextBtnHandler = () => {
    setBtnActive(false);
    setCurrPage((prev) => {
      prev++;
      if (prev >= numberOfPages) prev = 0;
      return prev;
    });
  };
  return (
    <Fragment>
      <h1>Pagination</h1>
      <hr />
      <div className={classes["users"]}>
        {currData.map((user) => (
          <Card
            key={user.node_id}
            avatar={user.avatar_url}
            username={user.login}
            link={user.html_url}
          />
        ))}
      </div>
      <div className={classes["pagination"]}>
        <button
          onClick={prevBtnHandler}
          className={`${btnActive && classes["active"]}`}
        >
          prev
        </button>
        {Array.from(Array(numberOfPages).keys()).map((_, idx) => (
          <span
            onClick={() => setCurrPage(idx)}
            key={idx}
            className={idx === currPage ? classes["active"] : ""}
          >
            {idx + 1}
          </span>
        ))}
        <button
          onClick={nextBtnHandler}
          className={`${!btnActive && classes["active"]}`}
        >
          next
        </button>
      </div>
    </Fragment>
  );
}

export default App;
