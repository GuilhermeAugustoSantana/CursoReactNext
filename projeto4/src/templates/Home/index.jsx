import { useCallback, useEffect, useState } from 'react';
import './styles.css';

const useAsync = (ayncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const run = useCallback(() => {
    setState({ result: null, error: null, status: 'pending' });

    return ayncFunction()
      .then((response) => {
        setState({ result: response, error: null, status: 'settled' });
      })
      .catch((error) => {
        setState({ result: null, error: error, status: 'error' });
      });
  }, [ayncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if (status === 'idle') return <pre>Nada executando</pre>;

  if (status === 'pending') return <pre>Loading...</pre>;

  if (status === 'error') return <pre>{error.menssage}</pre>;

  if (status === 'settled') return <pre>{JSON.stringify(result, null, 2)}</pre>;

  return 'IXXI';
};
