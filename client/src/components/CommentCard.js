import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const CommentCard = ({ comment }) => {
    console.log(comment)
    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <div>
            <h3>hi</h3>
            {/* <h3>{user.username}</h3>
            <h3>{comment.content}</h3> */}

        </div>
    )
}

export default CommentCard
