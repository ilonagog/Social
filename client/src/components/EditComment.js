import React, { useState } from 'react'

const EditComment = ({ comment }) => {
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
    return (
        <div>
            <form onClick={handleSubmit}>
                <label>Content</label>
                <input name="content" value={input.content} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default EditComment
