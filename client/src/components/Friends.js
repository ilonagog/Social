import React, { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../context/UsersContext';
import ProfileInfo from './ProfileInfo';
import Messages from './Messages';
import { Button } from '@mobiscroll/react-lite';

const Friends = () => {
    const { users } = useContext(UsersContext);
    const [viewMessages, setViewMessages] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [viewInfo, setViewInfo] = useState(false);

    useEffect(() => {
        if (selectedUser) {
        }
    }, [selectedUser]);

    const handleViewMessages = (userId) => {
        const selected = users.find((u) => u.id === userId);
        if (selectedUser && selectedUser.id === selected.id) {
            setSelectedUser(null);
            setViewMessages(false);
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
        } else {
            setSelectedUser(selected);
            setViewInfo(true);
            setViewMessages(false);
        }
    };

    const friendsList = users.map((user) => (
        <div className='friends-block' key={user.id}>
            <Button onClick={() => handleViewMessages(user.id)}>Message {user.name}</Button>
            <Button onClick={() => handleViewInfo(user.id)}>View {user.name}'s info</Button>
        </div>
    ));

    return (
        <div className='friends'>
            {viewMessages ? (
                <div>
                    <Button onClick={() => setViewMessages(false)}>Close Messages</Button>
                    <Messages selectedUser={selectedUser} />
                </div>
            ) : (
                <div>{friendsList}</div>
            )}
            {viewInfo ? (
                <div>
                    <Button onClick={() => setViewInfo(false)}>Close Info</Button>
                    <ProfileInfo selectedUser={selectedUser} />
                </div>
            ) : null}
        </div>
    );
};

export default Friends;









