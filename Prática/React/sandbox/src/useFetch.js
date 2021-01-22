import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw Error('Could not fetch data');
      }
      const data = await res.json();
      setData(data);
      setError(null);
      setIsLoading(false);
    }
    catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url])

  return { data, isLoading, error }
}

export default useFetch;