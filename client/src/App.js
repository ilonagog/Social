
import './App.css';
import { UserProvider } from './context/UserContext'

import { UsersProvider } from './context/UsersContext';
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
import Messages from './components/Messages';
import EditUser from './components/EditUser';
import Friends from './components/Friends';
import NotFound from './components/NotFound';
// import ProfileInfo from './components/ProfileInfo';


function App() {
  const [posts, setPosts] = useState([])
  const [postEdited, setPostEdited] = useState(false);

  useEffect(() => {
    fetch("/posts")
      .then(response => response.json())
      .then(data => {
        const postsDate = data.map(post => {
          return {
            ...post,
            createdAt: new Date(post.created_at).toLocaleString()
          }
        })
        // console.log(data)
        setPosts(postsDate)
      })
  }, [])

  const addPost = (newPost) => setPosts([...posts, newPost])

  // const handleEditPost = (updatedPost) => {
  //   const filteredArray = posts.map((post) => posts.id === updatedPost.id ? updatedPost : post);
  //   setPosts(filteredArray)
  // }

  // const handleUpdatePost = (updatedPost) => {
  //   const updatedPosts = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
  //   setPosts(updatedPosts);
  // };

  const updatePosts = (formData) => {

    const updatedPosts = posts.map((p) => p.id === formData.id ? formData : p);


    setPosts(updatedPosts);
    setPostEdited(true);
  };




  return (
    <div>
      <UserProvider>
        <UsersProvider >

          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts} addPost={addPost} onUpdatePost={updatePosts} postEdited={postEdited} />} />
            <Route path="/posts/new" element={<NewPost addPost={addPost} posts={posts} setPosts={setPosts} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/comments" element={<Comments />} />
            {/* <Route path="/users/:id" element={<ProfileInfo />} /> */}
            <Route path="/posts/:id/comments" element={<NewComment posts={posts} setPosts={setPosts} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Friends />} />
            <Route path="/users/:id/messages" element={<Messages />} />
            <Route path="/edit_profile" element={<EditUser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UsersProvider>

      </UserProvider>
    </div >
  );
}

export default App;
