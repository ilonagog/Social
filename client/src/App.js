
import './App.css';
import React, { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Comments from './components/Comments';
function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/posts")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPosts(data)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>

    </div>
  );
}

export default App;
