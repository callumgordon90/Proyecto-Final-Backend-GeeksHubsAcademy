import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const FollowHandler = ({ idToFollow}) => {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow= () => {

    }

    const handleUnfollow = () => {

    }

    useEffect(() => {
        

    }, [userData, idToFollow])
    
    

    return (
        <div>
            Follow
        </div>
    );
};

export default FollowHandler;