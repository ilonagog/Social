import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { UsersContext } from '../context/UsersContext';

import NewMessage from './NewMessage';
import Message from './Message';

const Messages = () => {
    const { loggedIn, messages, setMessages, user } = useContext(UserContext);
    const { selectedUser } = useContext(UsersContext)
    useEffect(() => {
        if (selectedUser && user) {
            fetch(`/users/${selectedUser.id}/messages`)
                .then((response) => response.json())
                .then((data) => {
                    const sortedMessages = data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
                    setMessages(sortedMessages);
                });
        }
    }, [selectedUser, user, setMessages]);

    return (
        <div>
            <ul className='messages'>
                {messages.map((message) => (
                    <Message key={message.id} message={message} user={user} />
                ))}
            </ul>
            {loggedIn ? <NewMessage selectedUser={selectedUser} /> : null}
        </div>
    );
};

export default Messages;


