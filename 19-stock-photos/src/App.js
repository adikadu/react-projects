import classes from "./App.module.css";
import { useState, useEffect, useCallback } from "react";
import { FaSearch } from "react-icons/fa";

const INITIAL_URL = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=9`;
const SEARCH_URL = `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=9`;
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [searchInp, setSearchInp] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [newImages, setNewImages] = useState(false);
  const getPhotos = useCallback(async (searchterm, pageNo) => {
    try {
      setIsLoading(true);
      let url = `${INITIAL_URL}&page=${pageNo}`;
      if (searchterm) url = `${SEARCH_URL}&page=${pageNo}&query=${searchterm}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Photos could not be fetched! :(");
      const data = await res.json();
      setPhotos((oldPhotos) => {
        if (searchterm && pageNo === 1) return data.results;
        let newPhotos = data;
        if (searchterm) newPhotos = data.results;
        return [...oldPhotos, ...newPhotos];
      });
      setNewImages(false);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setNewImages(false);
      setIsLoading(false);
      setError(error);
    }
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!newImages) return;
    if (isLoading) return;
    setCurrPage((oldPage) => oldPage + 1);
  }, [newImages, isLoading]);

  const addScrollEvent = useCallback(() => {
    if (window.innerHeight + window.scrollY > document.body.scrollHeight - 2)
      setNewImages(true);
  }, []);

  useEffect(() => {
    getPhotos(searchInp, currPage);
  }, [getPhotos, searchInp, currPage]);

  useEffect(() => {
    const event = window.addEventListener("scroll", addScrollEvent);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, [addScrollEvent]);

  if (error) return <h1>{error.message}</h1>;

  return (
    <main>
      <form onSubmit={formSubmitHandler} className={classes["search-form"]}>
        <input
          value={searchInp ?? ""}
          onChange={(e) => setSearchInp(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button>
          <FaSearch />
        </button>
      </form>
      {photos.length > 0 && (
        <div className={classes["container"]}>
          {photos.map((photo, index) => (
            <div key={index} className={classes["photo"]}>
              <img src={photo.urls.small} alt={photo.alt_description} />
              <div className={classes["photo-info"]}>
                <div className={classes["text-info"]}>
                  <span className={classes["photographer-name"]}>
                    {photo.user.name}
                  </span>
                  <span className={classes["likes"]}>
                    {!photo.likes
                      ? "no likes"
                      : photo.likes === 1
                      ? "1 like"
                      : `${photo.likes} likes`}
                  </span>
                </div>
                <a
                  href={photo.user.social.portfolio_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.user.profile_image.medium}
                    alt={photo.user.name}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      {isLoading && <h1>Loading...</h1>}
      {error !== null && <h1>{error.message}</h1>}
      {!isLoading && !photos.length && (
        <h1> No Photos found for your search term! :(</h1>
      )}
    </main>
  );
}

export default App;
