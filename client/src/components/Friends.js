import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import Messages from './Messages';
import { Button } from '@mobiscroll/react-lite';

const Friends = () => {
    const { user } = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [viewMessages, setViewMessages] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('/users')
            .then((response) => response.json())
            .then((data) => setUsers(data.filter((u) => u.id !== user.id))); // all users excpt for the logged-in user
    }, [user.id]);

    const handleViewMessages = (userId) => {
        console.log("Users:", users);
        const selected = users.find((u) => u.id === userId);
        console.log("Selected user:", selected);
        setSelectedUser(selected);
        setViewMessages(true);
    };

    const friendsList = users.map((user) => (
        <Link to={`/users/${user.id}/messages`} key={user.id}>
            <Button onClick={() => handleViewMessages(user.id)}>{user.name}</Button>
        </Link>
    ));

    console.log("Selected user in render:", selectedUser);

    return (
        <div>
            <h2>Friends</h2>
            {viewMessages ? (
                <Messages selectedUser={selectedUser} />
            ) : (
                <div>{friendsList}</div>
            )}
        </div>
    );
};

export default Friends;








