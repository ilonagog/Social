import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = ({ addPost }) => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        image: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    response.json().then((newPost) => {
                        addPost(newPost)
                        setFormData({
                            title: "",
                            image: ""
                        })
                        navigate("/posts")
                    })
                } else {
                    response.json().then((err) => {
                        if (err.errors) {
                            setErrors(Object.values(err.errors));
                        } else {
                            setErrors([err.error])
                        }
                    })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input name="title" value={formData.title} onChange={handleChange} />
                <label>Image</label>
                <input name="image" value={formData.image} onChange={handleChange} />
                <input type="submit" />
            </form>
            <div className='errors'>
                {errors.map((err, i) => (
                    <ul style={{ color: "black" }} key={i}>
                        {err}
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default NewPost
