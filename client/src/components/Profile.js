import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from "react-router-dom"

const Profile = () => {

    const { user } = useContext(UserContext)
    const { name, image_url } = user


    return (
        <div>
            <h3>Welcome back {name}!</h3>
            <img width="450px" alt="image" src={image_url} />
            <Link to="/edit_profile">
                <Button>User information</Button>
            </Link>

        </div>
    )
}

export default Profile
