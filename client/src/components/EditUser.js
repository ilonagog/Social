import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

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
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input name="username" value={userFormData.username} onChange={handleChange} />
                <label>Email</label>
                <input name="email" value={userFormData.email} onChange={handleChange} />
                <label>Name</label>
                <input name="name" value={userFormData.name} onChange={handleChange} />
                <label>Bio</label>
                <input name="bio" value={userFormData.bio} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default EditUser;

