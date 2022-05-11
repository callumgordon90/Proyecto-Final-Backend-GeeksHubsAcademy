import React, { useContext } from 'react-redux';
import { UidContext } from "../components/AppContext";
import LeftNav from '../components/LeftNav';
import { isEmpty } from "../components/tools";
import Card from "../components/Post/Card";

const Trending = () => {
    const uid = useContext(UidContext);
    const trendList = useSelector((state) => state.trendingReducer);


    return (
        <div className='trending-page'>
            <LeftNav />
            <div className='main'>
                <ul>
                    {!isEmpty(trendList[0]) && trendingList.map((post) => <Card post={post}
                    key={post._id} /> )}
                </ul>
            </div>
            
        </div>
    );
};

export default Trending;