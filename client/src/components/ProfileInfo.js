import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'

const ProfileInfo = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            <img width="450px" src={user.image_url} />
            <p>Bio : {user.bio}</p>
            <Link to="/edit_profile">
                <Button>Edit information</Button>
            </Link>
        </div>
    )
}

export default ProfileInfo
