import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewComment = () => {
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])
    let { id } = useParams()
    id = parseInt(id)
    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = { ...content }
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
                        console.log(newComment)
                        setContent()
                    })
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
                <input name="content" value={content} onChange={(e) => setContent()} />
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
