import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
const Signup = () => {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [bio, setBio] = useState('');
    const [isImage, setIsImage] = useState(false);
    const navigate = useNavigate();
    const { signup } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!avatar) {
            setIsImage(true);
        } else {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("name", name);
            formData.append("avatar", avatar);
            formData.append("bio", bio);

            fetch("/signup", {
                method: "POST",
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(user => {
                                signup(user);
                                navigate("/");
                            });
                    } else {
                        response.json()
                            .then(json => {
                                setErrors(json.errors);
                                setIsImage(false);
                            });
                    }
                });
        }
    };

    return (
        <div>
            <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Enter your username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        >
                            Username
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                            Email
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            type="password"
                            passwordToggle={password === true}
                            placeholder="Set a password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                            Password
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Upload your avatar"
                            name="avatar"
                            type="file"
                            onChange={(e) => setAvatar(e.target.files[0])}
                        >
                            Avatar
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Enter your name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                            Name
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Enter your bio"
                            name="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        >
                            Bio
                        </mobiscroll.Input>
                    </div>
                    <mobiscroll.Button type="submit">Sign In</mobiscroll.Button>
                </div>
            </mobiscroll.Form>

            {isImage && <p style={{ color: "black" }}>Please upload an avatar image</p>}
            {errors.length > 0 && (
                <ul>
                    {errors.map((error, index) => (
                        <li key={index} style={{ color: "red" }}>{error}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Signup;
