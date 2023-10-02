import React, { useState, useEffect } from 'react'
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUser(data)
                setLoggedIn(true)
            })
    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)

    }
    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = () => {
        setUser(user)
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{ user, errors, setErrors, loggedIn, login, logout, signup }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }