
import './App.css';
import React, { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import Comments from './components/Comments';
import Home from './components/Home';
import NewComment from './components/NewComment';
import Profile from './components/Profile';
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

  const addPost = (newPost) => setPosts([...posts, newPost])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts} addPost={addPost} />} />
        <Route path="/posts/new" element={<NewPost addPost={addPost} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts/:id/comments" element={<NewComment />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>

    </div>
  );
}

export default App;
