import React, { useContext, useState } from 'react'
import NewComment from './NewComment'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const PostCard = ({ post }) => {
    const [viewForm, setViewForm] = useState(false)
    // console.log(post)
    const { title, image, id, comments } = post
    // console.log(comments)
    const { user, setUser, loggedIn } = useContext(UserContext)

    const onDeleteComment = (deletedComment) => {

    }
    const commentsList = comments.map((comment) => {
        if (user) {
            const handleDeleteComment = (deletedComment) => {
                fetch(`/posts/${deletedComment.id}`, {
                    method: "DELETE",
                })
                    .then(() => {
                        onDeleteComment(comment)
                    })
            }
            return (
                <div>
                    <h3>{comment.username}: </h3>
                    <h3>Comments:  {comment.content}</h3>
                    {(user.id === comment.user_id) ? (
                        <button onClick={handleDeleteComment}>Delete Comment</button>

                    ) : null}
                </div>
            )
        } else {
            return (
                <div>
                    <h3>{comment.username}: </h3>
                    <h3>Comments:  {comment.content}</h3>
                </div>
            )
        }
    })
    const handleClick = (e) => {
        setViewForm(true)
    }
    if (loggedIn) {
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

    } else {
        return (
            <div>
                <h3>Title: {title}</h3>
                <img width="450px" src={image} alt={image} />
                {commentsList}
            </div>
        )
    }
}

export default PostCard
