import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const NewComment = () => {
    const { comments, setComments } = useContext(UserContext)
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])
    let { id } = useParams()
    id = parseInt(id)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = { content: content }
        fetch(`/posts/${id}/comments`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((newComment) => {
                        if (newComment) {
                            setComments([...comments, newComment])
                        }
                        console.log(newComment)
                        setContent({ content: "" })
                    })
                    navigate("/posts")
                } else {
                    response.json().then((err) => {
                        if (err.errors) {
                            setErrors(Object.values(err.errors))
                        } else {
                            setErrors([err.error])
                        }
                    })
                }
            })
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <label>Content</label>
                <input name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <input type="submit" />
            </form>
            {errors.map((err) => (
                <li style={{ color: "black" }} key={err}>
                    {err}
                </li>
            ))}
        </div>
    )
}

export default NewComment
