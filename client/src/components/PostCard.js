import React from 'react'

const PostCard = ({ post }) => {

    return (
        <div>
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.image} />

        </div>
    )
}

export default PostCard
