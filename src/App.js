import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  const [posts, SetPosts] = useState([]);
  const [loading, SetLoading] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(10);
  const getPosts = async () => {
    SetLoading(true);
    let posts = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    let data = await posts.data;
    SetPosts(data);
    SetLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const handlePaginate = number => SetCurrentPage(number);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        handlePaginate={handlePaginate}
      />
    </div>
  );
};

export default App;
