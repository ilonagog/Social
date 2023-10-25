import React, { useContext, useState } from 'react'
import PostCard from './PostCard'
import NewPost from './NewPost'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Button } from '@mobiscroll/react-lite'
const Posts = ({ posts, addPost, setPosts, onUpdatePost }) => {
    const [viewForm, setViewForm] = useState(false)
    const { loggedIn } = useContext(UserContext)
    const postsList = posts.map(post => {
        return (
            <PostCard key={post.id} post={post} addPost={addPost} posts={posts} setPosts={setPosts} onUpdatePost={onUpdatePost} />
        )
    })
    const handleClick = (e) => {
        setViewForm(true)
    }
    if (loggedIn) {

        return (
            <div>
                <Link to="/posts/new"><Button onClick={handleClick}>Want to post?</Button></Link>
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
