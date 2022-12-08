import { useEffect, useState } from "react";

const URL = "https://api.github.com/users/john-smilga/followers?per_page=100";
export default function useFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    })();
  }, []);
  return { isLoading, data };
}
