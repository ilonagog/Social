import React from 'react'
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }
