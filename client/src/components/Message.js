import React from 'react';

const Message = ({ message, senderLinks, receiverLinks }) => {
    return (
        <li>
            <div className='chat-body'>
                <div className='chat-content'>
                    <p> {message.sender_name}</p>
                </div>
                <br />
                <div>

                    <p>Message: {message.content}</p>
                </div>
                {/* <p>{message.receiver_name}</p> */}
                {/* <p>Message: {message.content}</p> */}
            </div>
        </li>
    );
};

export default Message;







