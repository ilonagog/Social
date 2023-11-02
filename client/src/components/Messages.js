import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import NewMessage from './NewMessage';
import Message from './Message';

const Messages = ({ selectedUser }) => {
    const { loggedIn, messages, setMessages, user } = useContext(UserContext);
    console.log(selectedUser)
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
                    <Message key={message.id} message={message} />
                ))}
            </ul>
            {loggedIn ? <NewMessage selectedUser={selectedUser} /> : null}
        </div>
    );
};

export default Messages;


