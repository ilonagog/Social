import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [comments, setComments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setLoggedIn(false)
                } else {
                    console.log(data)
                    setUser(data)
                    setLoggedIn(true)
                    fetchComments(data.comments)
                }
            })
    }, [])

    const fetchComments = () => {
        fetch("/comments")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setComments(data)
            })
    }


    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchComments()
        navigate("/")

    }
    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{ user, errors, setErrors, loggedIn, login, logout, signup, comments }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }
