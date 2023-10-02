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
            })
    }, [])



    return (
        <UserContext.Provider value={{ user, errors, setErrors, loggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }
