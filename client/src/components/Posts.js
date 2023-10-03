import React from 'react'
import PostCard from './PostCard'
const Posts = ({ posts, setPosts }) => {
    const postsList = posts.map(post => {
        return (
            <PostCard key={post.id} post={post} />
        )
    })
    return (
        <div>
            {postsList}
        </div>
    )
}

export default Posts
