import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [users, setUsers] = useState([]);
    const [viewMessages, setViewMessages] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [viewInfo, setViewInfo] = useState(false);

    useEffect(() => {
        if (user && user.id) {
            fetch('/users')
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data.filter((u) => u.id !== user.id));
                })
                .catch((error) => console.error('Error fetching users:', error));
        }
    }, [user]);

    const handleViewMessages = (userId) => {
        const selected = users.find((u) => u.id === userId);
        if (selectedUser && selectedUser.id === selected.id) {
            setSelectedUser(null);
            setViewMessages(false);
            setViewInfo(false)
        } else {
            setSelectedUser(selected);
            setViewMessages(true);
            setViewInfo(false);
        }
    };

    const handleViewInfo = (userId) => {
        const selected = users.find((u) => u.id === userId);
        if (selectedUser && selectedUser.id === selected.id) {
            setSelectedUser(null);
            setViewInfo(false);
            setViewMessages(false)
        } else {
            setSelectedUser(selected);
            setViewInfo(true);
            setViewMessages(false);
        }
    };

    return (
        <UsersContext.Provider value={{ users, setUsers, viewMessages, setViewMessages, handleViewMessages, setSelectedUser, selectedUser, viewInfo, setViewInfo, handleViewInfo }}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersProvider, UsersContext };


