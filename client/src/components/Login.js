import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/UserContext"

const Login = () => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const { login } = useContext(UserContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        console.log(data)
                        login(data)
                        navigate("/")
                    })
                } else {
                    response.json().then((err) => setErrors(err.errors))
                }
            })

    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input name="username" value={formData.username} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input name="password" value={formData.password} onChange={handleChange} />
                <input type="submit" />
            </form>
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Login
