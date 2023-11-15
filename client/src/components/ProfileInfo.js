import React, { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';
import defaultAvatar from "../images/avatar.jpg";
const ProfileInfo = () => {
    const { selectedUser } = useContext(UsersContext)
    if (!selectedUser) {
        return <div className="profile-info">No user selected</div>;
    }
    const handleImage = (e) => {
        e.target.src = defaultAvatar;
    }
    return (
        <div className="profile-info">
            <p className="profile-username">Username: {selectedUser.username}</p>
            <p className="profile-email">Email: {selectedUser.email}</p>
            <p className="profile-name">Name: {selectedUser.name}</p>
            <img className="profile-image" width="450px" src={selectedUser.image_url} alt="User Avatar" onError={handleImage} />
            <p className="profile-bio">Bio: {selectedUser.bio}</p>
        </div>
    );
};


export default ProfileInfo;

