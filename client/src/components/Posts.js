import React, { useContext, useState } from 'react'
import PostCard from './PostCard'
import NewPost from './NewPost'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
const Posts = ({ posts, addPost }) => {
    const [viewForm, setViewForm] = useState(false)
    const { loggedIn } = useContext(UserContext)
    const postsList = posts.map(post => {
        return (
            <PostCard key={post.id} post={post} addPost={addPost} />
        )
    })
    const handleClick = (e) => {
        setViewForm(true)
    }
    if (loggedIn) {

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
    } else {
        return (
            <div>
                <ul>{postsList}</ul>
            </div>
        )
    }
}

export default Posts
