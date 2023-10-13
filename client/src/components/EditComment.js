import React, { useState } from 'react'
import { Button } from '@mui/material'
const EditComment = ({ comment }) => {
    const [viewForm, setViewForm] = useState(false)
    const [input, setInput] = useState({ content: comment.content })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleViewForm = () => {
        setViewForm(true)
    }
    return (
        <div>
            {viewForm ?
                <form onClick={handleSubmit}>
                    <label>Content</label>
                    <input name="content" value={input.content} onChange={handleChange} />
                    <input type="submit" />
                </form>
                :
                <Button onClick={handleViewForm}>Edit your comment</Button>
            }
        </div>
    )
}

export default EditComment
