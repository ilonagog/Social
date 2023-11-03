import React from 'react';

const Message = ({ message, user }) => {
    const isSent = message.sender_id === user.id;
    return (
        <li>
            <div className='chat-body'>
                {/* {isSent ? "sent  message" : "received message"} */}
                <div className='chat-content'>
                    <p className={isSent ? 'sent-text' : 'received-text'}>
                        {isSent ? "You" : message.sender_name} :</p>
                    <br />
                    <div>
                        <p className={isSent ? 'sent-text' : 'received-text'}>
                            {message.content}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Message;







