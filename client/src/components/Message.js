import React from 'react';

const Message = ({ message }) => {
    return (
        <li>
            <div className='chat-body'>
                <div className='chat-content'>
                    <p> {message.sender_name}</p>
                </div>
                <br />
                <div>
                    <p>{message.content}</p>
                </div>
            </div>
        </li>
    );
};

export default Message;







