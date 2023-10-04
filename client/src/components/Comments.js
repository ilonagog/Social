import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import CommentCard from './CommentCard'

const Comments = () => {
    const { comments } = useContext(UserContext)
    const commentsList = comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
    return (
        <div>
            <ul>{commentsList}</ul>
        </div>
    )
}

export default Comments
