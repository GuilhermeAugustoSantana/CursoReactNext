import { useState } from 'react';
import { useFetch } from './use-fetch';

import './styles.css';

export const Home = () => {
  const [postId, setPostId] = useState('');
  const json = 'https://jsonplaceholder.typicode.com/posts/' + postId;
  const [result, loading] = useFetch(json, {
    method: 'GET',
    headers: {
      abc: '2' + postId,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const handlClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    // 123455
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={`post-${p.id}`} onClick={() => handlClick(p.id)}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handlClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }
};
