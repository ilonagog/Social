import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Signup = () => {
    const [errors, setErrors] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState(null)
    const [bio, setBio] = useState('')
    const [isImage, setIsImage] = useState(false)
    const navigate = useNavigate()
    const { signup } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!avatar) {
            setIsImage(true)
        } else {
            const formData = new FormData();
            formData.append("username", username)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("name", name)
            formData.append("avatar", avatar)
            formData.append("bio", bio)

            fetch("/signup", {
                method: "POST",
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(user => {
                                signup(user)
                                navigate("/")
                            })
                    } else {
                        response.json()
                            .then(json => {
                                setUsername("")
                                setEmail("")
                                setPassword("")
                                setName("")
                                setAvatar(null)
                                setBio("")
                                setErrors(json.errors)
                            })
                        // const errorList = user.errors.map((e, i) => <li key={i}>{e}</li>)
                        // setErrors(errorList)
                    }
                })
        }

    }
    // const handleChange = (e) => {
    //     setFormdata({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     })
    // }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Name</label>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Avatar</label>
                <input type="file" name="avatar" onChange={(e) => setAvatar(e.target.files[0])} />
                <label>Bio</label>
                <input name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                <input type="submit" />
            </form>
            {isImage && <p style={{ color: "black" }}>Please upload an avatar image</p>}
            {errors ? <ul style={{ color: "red" }}>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul> : null}
        </div>
    )
}

export default Signup

// if (!formData.username || !formData.email || !formData.password || !formData.name || !formData.avatar || !formData.bio) {
//     // Display an error message or handle the error as needed
//     console.error("Username, email, and password are required.");
//     return;
// }