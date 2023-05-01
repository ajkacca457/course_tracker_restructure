import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
    const {user}= useSelector((state)=>{return state.user});

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectRoute;