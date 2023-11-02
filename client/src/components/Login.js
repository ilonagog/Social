import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/UserContext"
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

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
            <div className='form'>
                <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit} className='form'>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input
                                inputStyle="box"
                                labelStyle="floating"
                                placeholder="Enter your username"
                                value={formData.username}
                                name="username"
                                onChange={handleChange}
                            >
                                Username
                            </mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input
                                inputStyle="box"
                                labelStyle="floating"
                                type="password"
                                passwordToggle={formData.password === true}
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            >
                                Password
                            </mobiscroll.Input>
                        </div>
                        <mobiscroll.Button type="submit">LogIn</mobiscroll.Button>
                    </div>
                </mobiscroll.Form>
                {errors.map((err) => (
                    <li style={{ color: "black" }} key={err}>
                        {err}
                    </li>
                ))}

            </div>
        </div>)
}

export default Login
