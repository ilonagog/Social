import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

const EditUser = () => {
    const { user, setUser } = useContext(UserContext);
    const [userFormData, setUserFormData] = useState({
        username: user.username,
        email: user.email,
        name: user.name,
        bio: user.bio,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserFormData({
            ...userFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            username: userFormData.username,
            email: userFormData.email,
            name: userFormData.name,
            bio: userFormData.bio,
        };

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((resp) => {
                resp.json().then((data) => setUser(data));
                navigate('/profile');
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
                            placeholder="Email your username"
                            name="username"
                            value={userFormData.username}
                            onChange={handleChange}
                        >
                            Username:
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Edit your email"
                            name="email"
                            value={userFormData.email}
                            onChange={handleChange}
                        >
                            Email:
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Edit your name"
                            name="name"
                            value={userFormData.name}
                            onChange={handleChange}
                        >
                            Name:
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Edit your bio"
                            name="bio"
                            value={userFormData.bio}
                            onChange={handleChange}
                        >
                            Bio:
                        </mobiscroll.Input>
                    </div>
                </div>
                <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
            </mobiscroll.Form>
        </div>
    );
};

export default EditUser;

