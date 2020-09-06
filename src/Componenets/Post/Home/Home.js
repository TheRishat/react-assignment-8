import React, { useState, useEffect } from 'react';
import Post from '../Post';

const Home = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      {/* <h1>posts: {posts.length}</h1> */}
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Home;
