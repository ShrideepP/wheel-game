import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({children}) => {

    const { userInfo } = UserContext();

    if(!userInfo.email || !userInfo.phone) <Navigate to='/' />

    return children;
    
};

export default ProtectedRoute;