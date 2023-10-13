import { Button } from '@mui/base'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const EditUser = () => {
    const { user } = useContext(UserContext)
    const [userFormData, setUserFormData] = useState({
        username: user.username,
        email: user.email,
        name: user.name,
        bio: user.bio

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(editUser)
        })
    }
    const handleChange = (e) => {
        setUserFormData({
            ...userFormData,
            [e.target.name]: e.target.value
        })
    }

    const editUser = {
        username: userFormData.username,
        email: userFormData.email,
        name: userFormData.name,
        bio: userFormData.bio
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input name="username" value={userFormData.username} onChange={handleChange} />
                <label>Email</label>
                <input name="email" value={userFormData.email} onChange={handleChange} />
                <label>Name</label>
                <input name="name" value={userFormData.name} onChange={handleChange} />
                <label>Bio</label>
                <input name="bio" value={userFormData.bio} onChange={handleChange} />
                <input type="submit" />
            </form>


        </div>
    )
}

export default EditUser
