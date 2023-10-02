import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/posts/new">Want to post?</Link>
            <Link to="/menu">Menu</Link>
        </div>
    )
}

export default NavBar
