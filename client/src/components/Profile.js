import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    const { name } = user
    return (
        <div>
            <h3>Welcome back {name}!</h3>

        </div>
    )
}

export default Profile
