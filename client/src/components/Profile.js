import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import { Button } from '@mobiscroll/react-lite'
import React, { useContext } from 'react'
import defaultAvatar from "../images/avatar.jpg";

const Profile = () => {
    const { user } = useContext(UserContext)
    const { name, image_url, bio, email } = user

    const handleImage = (e) => {
        e.target.src = defaultAvatar
    }

    return (
        <>
            <h3>Welcome back {name}!</h3>
            <Link to="/edit_profile">
                <Button>Click to edit your information</Button>
            </Link>
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src={image_url} width="450px" className="img-radius" alt="avatar" onError={handleImage} />
                                            </div>
                                            <h6 className="f-w-600">{name}</h6>
                                            <p>{bio}</p>
                                            <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information :</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">{email}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile
