import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { UsersContext } from '../context/UsersContext';

const NewMessage = () => {
    const { user, addMessages } = useContext(UserContext);
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);
    const { selectedUser } = useContext(UsersContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            content: content,
            sender_id: user.id,
            receiver_id: selectedUser.id
        };

        fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage),
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        console.log(data);
                        addMessages(data);
                        setContent('');
                    });
                } else {
                    response.json().then((err) => {
                        if (err.errors) {
                            setErrors(Object.values(err.errors));
                        } else {
                            setErrors([err.error]);
                        }
                    });
                }
            })
            .catch((error) => {
                console.error('Error sending message:', error);
            });
    };

    return (
        <div>
            <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Please be kind when messaging"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        >
                            Message:
                        </mobiscroll.Input>
                    </div>
                </div>
                <mobiscroll.Button type="submit">Send</mobiscroll.Button>
            </mobiscroll.Form>

            {errors.length > 0 && (
                <div>
                    {errors.map((error, index) => (
                        <div key={index}>{error}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NewMessage;

