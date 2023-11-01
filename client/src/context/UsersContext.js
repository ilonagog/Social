import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [users, setUsers] = useState([]);
    // console.log(user)
    useEffect(() => {
        if (user && user.id) {
            fetch('/users')
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data.filter((u) => u.id !== user.id));
                    console.log(data);
                })
                .catch((error) => console.error('Error fetching users:', error));
        }
    }, [user]);

    return (
        <UsersContext.Provider value={{ users }}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersProvider, UsersContext };


