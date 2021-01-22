import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('use effect ran');

    fetch(url)
    .then(res => {
      if (!res.ok) {
        throw Error('could not fetch data');
      }
      return res.json()
    })
    .then(data => {
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setError(err.message);
      setIsLoading(false);
    });
  }, [url]);

  return { data, isLoading, error }
}

export default useFetch;