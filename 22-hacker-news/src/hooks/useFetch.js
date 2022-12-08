import { useState, useEffect } from "react";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(0);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(`${API_ENDPOINT}query=${query}&page=${page}`);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    })();
  }, [query, page]);
  return { isLoading, data, setQuery, setPage };
}
