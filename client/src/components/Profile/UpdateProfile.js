import React from 'react';
import LeftNav from '../LeftNav';
import { useSelector } from "react-redux";

const UpdateProfile = () => {
    const userData = useSelector((state) => state.userReducer)
    return (
        <div className='profile-container'>
            <LeftNav />
            <h1> Profile page of {userData.pseudo}</h1>
            <div className='update-container'>
                <div className='left-part'>
                    <h3>Profile photo</h3>
                    <img src={userData.picture} alt="user-pic" />
                    UPLOAD PIC
                    <p>{errors.maxSize}</p>
                    <p>{errors.format}</p>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;