import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(url);
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }
    fetchData();
  }, [url]);

  return { data, error };
}
