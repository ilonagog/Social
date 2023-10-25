import React from 'react';

const Message = ({ message, senderLinks, receiverLinks }) => {
    return (
        <li>
            <div>
                <p> {message.sender_name}</p>
                <p>Message: {message.content}</p>
                <p>{message.receiver_name}</p>
                <p>Message: {message.content}</p>
            </div>
        </li>
    );
};

export default Message;







