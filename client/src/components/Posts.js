import React, { useState } from 'react'
import PostCard from './PostCard'
import NewPost from './NewPost'
import { Link } from 'react-router-dom'
const Posts = ({ posts, setPosts, addPost }) => {
    const [viewForm, setViewForm] = useState(false)
    const postsList = posts.map(post => {
        return (
            <PostCard key={post.id} post={post} addPost={addPost} />
        )
    })
    const handleClick = (e) => {
        setViewForm(true)
    }
    return (
        <div>
            <Link to="/posts/new"><button onClick={() => handleClick}>Want to post?</button></Link>
            {viewForm ?
                <NewPost addPost={addPost} />
                :
                <ul>{postsList}</ul>
            }
        </div>
    )
}

export default Posts
