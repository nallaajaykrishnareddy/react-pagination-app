import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading........</h1>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
