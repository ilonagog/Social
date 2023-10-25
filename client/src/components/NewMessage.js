import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { useNavigate } from 'react-router-dom';

const NewMessage = () => {
    const { user, loggedIn, messages, setMessages, addMessages } = useContext(UserContext);
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            content: content,
            sender_id: loggedIn.id,
            receiver_id: user.id
        };
        fetch("/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((data) => {
                            addMessages([...messages, data])
                            navigate("/friends/${id}/message");
                            setErrors([]);
                            setContent("")
                        })
                } else {
                    response.json().then((err) => {
                        if (err.errors) {
                            setErrors(Object.values(err.errors));
                        } else {
                            setErrors([err.error])
                        }
                    })
                }
            })
    }


    return (
        <div className='form-add'>
            <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Please be kind when comment"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        >
                            Content:
                        </mobiscroll.Input>
                    </div>
                </div>
                <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
            </mobiscroll.Form>
            <div className='errors'>
                {errors.map((err, i) => (
                    <ul style={{ color: "black" }} key={i}>
                        {err}
                    </ul>
                ))}
            </div>
        </div>
    )
}


export default NewMessage;



