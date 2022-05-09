import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../tools';

const FollowHandler = ({ idToFollow}) => {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();

    const handleFollow= () => {
        dispatch(followUser(userData._id, idToFollow));
        setIsFollowed(true);
    }

    const handleUnfollow = () => {

    }

    useEffect(() => {
        if (isEmpty (userData.following)) {
            if (userData.following.includes(idToFollow)) {
                setIsFollowed(true);
            } else setIsFollowed(false);
        }

    }, [userData, idToFollow])
    
    

    return (
        <>
        {isFollowed && !isEmpty(userData) && (
        <span onClick={handleUnfollow}>
            <button className="unfollow-btn">follower</button>
        </span>
        )}
        </>
        {isFollowed === false && !isEmpty(userData) && (
        <span onClick={handleFollow}>
            <button className="follow-btn">following</button>
        </span>  
        )}
    );
};

export default FollowHandler;