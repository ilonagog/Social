import React from 'react'

const CommentCard = ({ comment }) => {
    console.log(comment)
    return (
        <div>
            <h3>{comment.content}</h3>

        </div>
    )
}

export default CommentCard
