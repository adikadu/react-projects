import { useEffect, useState } from "react";

export default function useFetch() {
  const [data, setdata] = useState(null);
  const [url, setUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      if (!url) return;
      setIsLoading(true);
      const res = await fetch(url);
      const resData = await res.json();
      setdata(resData);
      setIsLoading(false);
    })();
  }, [url]);
  return { data, setUrl, isLoading };
}
