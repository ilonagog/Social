import React from 'react';

const Message = ({ message, user }) => {
    const isSent = message.sender_id === user.id;

    const createdAt = new Date(message.created_at)

    const formattedDate = createdAt.toLocaleString('en-US', {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    })

    const formatedTime = createdAt.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    })
    return (
        <li>
            <div className='chat-body'>
                <div className='chat-content'>
                    <p className={isSent ? 'sent-text' : 'received-text'}>
                        {isSent ? "You" : message.sender_name} :</p>
                    <br />
                    <div>
                        <p className={isSent ? 'sent-text' : 'received-text'}>
                            {message.content}</p>
                        <p>{formattedDate} {formatedTime}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Message;







