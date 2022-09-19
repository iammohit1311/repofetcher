import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import DetailsCard from "./components/DetailsCard";

function App() {
  const [name, setName] = useState("iammohit1311");
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [nameFromButtonClick, setNameFromButtonClick] =
    useState("iammohit1311");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${name}/repos`);
      setPosts(res.data);
      setLoading(false);
    };

    const fetchUser = async () => {
      const res = await axios.get(`https://api.github.com/users/${name}`);
      setUser(res.data);
    };

    fetchUser();
    fetchPosts();
  }, [nameFromButtonClick]);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <SearchBar
        name={name}
        setName={setName}
        setNameFromButtonClick={setNameFromButtonClick}
      />

      <DetailsCard user={user} />

      <div className="container mt-5">
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
