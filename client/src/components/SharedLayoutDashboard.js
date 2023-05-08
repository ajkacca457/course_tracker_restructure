import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const SharedLayoutDashboard = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default SharedLayoutDashboard;