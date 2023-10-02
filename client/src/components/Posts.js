import React from 'react'
import PostCard from './PostCard'

const Posts = ({ posts, setposts }) => {
    console.log(posts)
    const postsList = posts.map(post => {
        console.log(post)
        return (<PostCard key={post.id} post={post} />)
    })
    return (
        <div>
            {postsList}
        </div>
    )
}

export default Posts
