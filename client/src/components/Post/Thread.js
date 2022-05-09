import React, { useEffect, useState } from 'react';
import React, { useDispatch } from 'react-redux';
import React, { getPosts } from '../actions/post.actions';


const Thread = () => {
    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);

    useEffect (()=>{
        if (loadPost) {
            dispatch(getPosts());
            setLoadPost(false)
        }
    }, [loadPost, dispatch])



    return (
       <div className="thread-container">
           <ul>
               {!isEmpty(posts[0]) && 
               posts.map((post) => {
                   return <Card post={post} key{post._id} />;
               })}
            </ul>
        </div>
    );
};

export default Thread;