import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Trends = () => {
    const posts = useSelector((state) => state.allPostsReducer);
    const userData = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEmpty(posts[0])){
            const postsArr = Object.keys(posts).map((i) => posts[i]);
            let sortedArray = postsArr.sort((a, b) => {
                return b.likers.length - a.likers.length;
            })
            sortedArray.length = 3;
            
        }
    
    }, [posts])


    return (
        <div>
            Trends
        </div>
    );
};

export default Trends;