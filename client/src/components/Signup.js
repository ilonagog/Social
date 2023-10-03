import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate()
    const { signup } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(user => {
                if (!user.errors) {
                    console.log(user)
                    signup(user)
                    navigate("/")
                } else {
                    const errorList = user.errors.map((e, i) => <li key={i}>{e}</li>)
                    setErrors(errorList)
                }
            })

    }
    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.tagret.name]: e.target.value
        })
    }
    return (
        <div>
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
            <ul>{errors}</ul>
        </div>
    )
}

export default Signup
