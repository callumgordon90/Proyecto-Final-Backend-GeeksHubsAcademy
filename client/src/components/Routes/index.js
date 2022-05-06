import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Trending from '../../pages/Trending';

const index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/trending" exact component={Trending} />
                
            </Routes>
        </Router>
    );
};

export default index;