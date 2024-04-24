import { useEffect, useMemo, useRef, useState } from 'react';
import '../../templates/App/App.css';
import P from 'prop-types';

const Posts = ({ post, onClick }) => {
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => onClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Posts.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  onClick: P.func,
};

export const MemoEx = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Posts key={post.id} post={post} onClick={handleClick} />;
          })
        );
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  );
};
