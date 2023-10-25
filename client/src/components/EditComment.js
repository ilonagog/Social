import React, { useState } from 'react';
import { Button } from '@mobiscroll/react-lite';

const EditComment = ({ comment, onEditComment }) => {
    const [viewForm, setViewForm] = useState(false);
    const [input, setInput] = useState({ content: comment.content });
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/comments/${comment.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });
            if (response.ok) {
                const data = await response.json();
                onEditComment(data);
                setViewForm(false);
            } else {
                const err = await response.json();
                setErrors(err.errors);
            }
        } catch (error) {
            console.error("Error editing comment: ", error);
        }
    };

    const handleViewForm = () => {
        setViewForm(true);
    };

    return (
        <div>
            {viewForm ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Content</label>
                        <input name="content" value={input.content} onChange={handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                    {errors.map((err, index) => (
                        <li style={{ color: "black" }} key={index}>
                            {err}
                        </li>
                    ))}
                </div>
            ) : (
                <Button onClick={handleViewForm}>Edit your comment</Button>
            )}
        </div>
    );
};

export default EditComment;
