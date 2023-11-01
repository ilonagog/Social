
import React, { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../context/UsersContext';

import Messages from './Messages';
import { Button } from '@mobiscroll/react-lite';
const Friends = () => {
    const { users } = useContext(UsersContext);
    const [viewMessages, setViewMessages] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
        if (selectedUser) {
            setViewMessages(true);
        }
    }, [selectedUser]);
    const handleViewMessages = (userId) => {
        console.log("Users:", users);
        const selected = users.find((u) => u.id === userId);
        console.log("Selected user:", selected);
        if (selectedUser && selectedUser.id === selected.id) {
            setSelectedUser(null);
            setViewMessages(false);
        }
        setSelectedUser(selected);
        setViewMessages(true);
    };
    const friendsList = users.map((user) => (
        <Button onClick={() => handleViewMessages(user.id)}>{user.name}</Button>
    ));
    console.log("Selected user in render:", selectedUser);
    return (
        <div className='friends'>
            <h2>Friends</h2>
            {viewMessages ? (
                <div>

                    <Button onClick={() => setViewMessages(false)}>Close Messages</Button>
                    <Messages selectedUser={selectedUser} />
                </div>
            ) : (

                <div>{friendsList}</div>
            )}
        </div>
    );
};

export default Friends;







