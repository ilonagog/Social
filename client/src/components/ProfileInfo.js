import React from 'react';

const ProfileInfo = ({ selectedUser }) => {
    if (!selectedUser) {
        return <div className="profile-info">No user selected</div>;
    }

    return (
        <div className="profile-info">
            <p className="profile-username">Username: {selectedUser.username}</p>
            <p className="profile-email">Email: {selectedUser.email}</p>
            <p className="profile-name">Name: {selectedUser.name}</p>
            <img className="profile-image" width="450px" src={selectedUser.image_url} alt="User Avatar" />
            <p className="profile-bio">Bio: {selectedUser.bio}</p>
        </div>
    );
};


export default ProfileInfo;

