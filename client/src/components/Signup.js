import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Signup = () => {
    const [errors, setErrors] = useState([])
    const [formData, setFormdata] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
        avatar: "",
        bio: ""
    })
    const { signup } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.tagret.name]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input name="" value={formData.username} onChange={handleChange} />
            <label>Email</label>
            <input name="" value={formData.email} onChange={handleChange} />
            <label>Password</label>
            <input name="" value={formData.password} onChange={handleChange} />
            <label>Name</label>
            <input name="" value={formData.name} onChange={handleChange} />
            <label>Avatar</label>
            <input name="" value={formData.avatar} onChange={handleChange} />
            <label>Bio</label>
            <input name="" value={formData.bio} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default Signup
