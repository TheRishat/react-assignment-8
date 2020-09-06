import React, { useState, useEffect } from 'react';

const Coments = () => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postsId')
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  return (
    <div>
      <h1> hello : {comment.length}</h1>
    </div>
  );
};

export default Coments;
