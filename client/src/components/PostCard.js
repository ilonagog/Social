import React from 'react'

const PostCard = ({ post }) => {
    console.log(post)
    const { title, image, id, comments } = post
    console.log(comments)

    const commentsList = comments.map((comment) => {
        return (
            <div>
                <h3>{comment.content}</h3>
            </div>
        )
    })
    return (
        <div>
            <h3>Title: {title}</h3>
            <img src={image} alt={image} />
            {commentsList}
        </div>
    )
}

export default PostCard
