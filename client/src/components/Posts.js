import React, { useContext, useState } from 'react'
import PostCard from './PostCard'
import NewPost from './NewPost'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Button } from '@mobiscroll/react-lite'
import mobiscroll from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';
const Posts = ({ posts, addPost, setPosts, onUpdatePost, postEdited }) => {
    const [viewForm, setViewForm] = useState(false)
    const [search, setSearch] = useState('')
    const { loggedIn } = useContext(UserContext)

    const postsList = posts
        .filter(post => post.user.name.toLowerCase().includes(search.toLowerCase()))
        .map(post => {
            return (
                <PostCard key={post.id} post={post} addPost={addPost} posts={posts} setPosts={setPosts} onUpdatePost={onUpdatePost} postEdited={postEdited} />
            )
        })

    const handleSearch = (e) => {
        setSearch(e.target.value)

    }
    const handleClick = (e) => {
        setViewForm(true)
    }
    if (loggedIn) {

        return (
            <div>
                <Link to="/posts/new"><Button onClick={handleClick}>Want to post?</Button></Link>
                <div className='search'>
                    <mobiscroll.Input
                        type="text"
                        placeholder="Search posts by user name"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
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
                <div className='search'>
                    <mobiscroll.Input
                        type="text"
                        placeholder="Search posts by user name"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <ul>{postsList}</ul>

            </div>
        )
    }
}

export default Posts
