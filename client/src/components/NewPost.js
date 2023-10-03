import React, { useState } from 'react'

const NewPost = () => {
    const [formData, setFormData] = useState({
        title: "",
        image: ""
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input name="title" value={formData.title} onChange={handleChange} />
            <label>Image</label>
            <input name="image" value={formData.image} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default NewPost
