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
                    response.json().then((userInfo) =>

                        login(userInfo)
                    )
                    navigate("/")
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
            {errors.map((err) => (
                <li style={{ color: "black" }} key={err}>
                    {err}
                </li>
            ))}

        </div>
    )
}

export default Login
