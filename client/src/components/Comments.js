import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const Comments = () => {
    const { comments } = useContext(UserContext)
    const commentsList = comments.map(comment => (<div>
        key = {comment.id} comment = {comment}
        console.log(comment)
    </div>))
    return (
        <div>
            <ul>{commentsList}</ul>
        </div>
    )
}

export default Comments
