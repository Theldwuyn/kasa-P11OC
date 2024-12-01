import { useState, useEffect } from 'react';

export function useFetch() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../../../public/data/logements.json');
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }
    fetchData();
  }, []);

  return { data, error };
}
