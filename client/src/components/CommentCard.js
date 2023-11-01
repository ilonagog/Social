import React from 'react';

const CommentCard = ({ comment }) => {
    const { username, createdAt, content } = comment;

    return (
        <div className='comment'>
            <span className='commentUsername'>{username}</span>
            <span className='commentDate'>{createdAt}</span>
            <p>{content}</p>
        </div>
    );
};

export default CommentCard;
