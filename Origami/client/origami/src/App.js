import "./App.css";

import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [selectedPost, setSelectedPost] = useState();
  const [posts, setPosts] = useState([]);

  function onMenuItemClick(id) {
    setSelectedPost(id);
  }

  useEffect(() => {
    fetch("http://localhost:3004/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  function getPosts(selectedPost) {
    if (!selectedPost) {
      return posts;
    } else {
      return posts.filter((x) => x.id == selectedPost);
    }
  }

  return (
    <>
      <Header></Header>
      <div className="container">
        <Aside onMenuItemClick={onMenuItemClick}></Aside>
        <Main posts={getPosts(selectedPost)}></Main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
