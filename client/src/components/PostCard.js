import React, { useState } from 'react'
import NewComment from './NewComment'
import { Link } from 'react-router-dom'


const PostCard = ({ post }) => {
    const [viewForm, setViewForm] = useState(false)
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
    const handleClick = (e) => {
        setViewForm(true)
    }
    return (
        <div>
            <h3>Title: {title}</h3>
            <img width="450px" src={image} alt={image} />
            {commentsList}
            {viewForm ?
                <NewComment />
                :
                <Link to={`/posts/${id}/comments`}><button onClick={handleClick} >New Comment</button></Link>
            }
        </div>
    )
}

export default PostCard
