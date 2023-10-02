import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserContext"

const Login = () => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const { login } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login")

    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input name="username" value={formData.username} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input name="password" value={formData.password} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default Login
