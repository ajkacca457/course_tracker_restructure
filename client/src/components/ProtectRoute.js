import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectRoute;